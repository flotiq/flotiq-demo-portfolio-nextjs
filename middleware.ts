import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';
import { locales } from '@/app/_lib/utils';

async function getLocale(request: NextRequest) {
  const acceptedLanguage = request.headers.get('accept-language') || '';
  const headers = { 'accept-language': acceptedLanguage };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = 'en';

  return match(languages, locales, defaultLocale);
}

export async function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = await getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|static|.*\\..*|_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
