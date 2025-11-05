import 'server-only';

import { Flotiq } from '@flotiq/flotiq-api-sdk';
import { createNextMiddleware } from './next-middleware';
import { createNextLivePreviewMiddleware } from '@flotiq/nextjs-live-preview';

export const flotiqApiClient = new Flotiq({
  apiKey: process.env.FLOTIQ_API_KEY,
  apiUrl: process.env.FLOTIQ_API_URL || 'https://api.flotiq.com',
  middleware: [createNextLivePreviewMiddleware(), createNextMiddleware()],
});

export const content = flotiqApiClient.content;
export const search = flotiqApiClient.search;
export const helpers = flotiqApiClient.helpers;
