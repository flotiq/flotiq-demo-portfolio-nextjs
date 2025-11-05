import { type Middleware } from '@flotiq/flotiq-api-sdk';
import { draftMode, cookies } from 'next/headers';

type NextRequestInit = RequestInit & {
  next?: {
    tags?: string[];
    revalidate?: number;
  };
};

export interface NextMiddlewareOptions {
  tagNamePrefix?: string;
  revalidateTime?: number;
}

/**
 *
 * @param options Next Middleware options
 * @param options.tagNamePrefix Prefix for tags injected to the request. Default: "flotiq-content"
 * @param options.revalidateTime Default revalidate time in seconds. Default: 1 day
 * @returns
 */
export function createNextMiddleware(
  options?: NextMiddlewareOptions,
): Middleware {
  const {
    tagNamePrefix = 'flotiq-content',
    revalidateTime = 24 * 60 * 60, // 1 day
  } = options || {};

  return {
    beforeRequest: async (ctx) => {
      const { isEnabled } = await draftMode();
      const cookieStore = await cookies();
      const livePreviewCookie = cookieStore.get('live-preview-data');

      const reqInit = ctx.init as NextRequestInit;

      if (isEnabled) {
        reqInit.headers = {
          ...reqInit.headers,
          'x-mode': 'preview',
        };
      } else {
        reqInit.headers = {
          ...reqInit.headers,
          'x-visibility': 'public',
        };
      }

      if (livePreviewCookie) {
        const cookieValue = JSON.parse(livePreviewCookie.value);
        reqInit.headers = {
          ...reqInit.headers,
          'x-auth-token': cookieValue.apiKey,
        };
      }

      const injectedTags = [tagNamePrefix];

      const ctdMatch = ctx.url.match(new RegExp('api/v1/content/([^/?]*)'));
      const ctdName = ctdMatch?.[1];
      if (ctdName) {
        injectedTags.push(`${tagNamePrefix}-${ctdName}`);
      }

      reqInit.next = {
        ...reqInit.next,
        tags: [...injectedTags, ...(reqInit.next?.tags || [])],
        /**
         * Revalidate time in seconds = days * 24 hours * 60 minutes * 60 seconds.
         * Default server-side cache time for all flotiq requests
         */
        revalidate: revalidateTime,
      };

      if (process.env.NODE_ENV === 'development' || isEnabled) {
        reqInit.cache = 'no-store';
        reqInit.next.revalidate = 0;
      }

      ctx.init = reqInit;

      return ctx;
    },
  };
}
