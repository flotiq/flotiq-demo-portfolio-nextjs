import Link from 'next/link';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { content } from '@/flotiq-api-client';
import { LivePreviewBox } from '@flotiq/nextjs-live-preview/server';
import { getFieldName, getTranslatedField } from '@/app/_lib/helpers';

type FooterProps = {
  readonly lang: string;
};

export default async function Footer({ lang }: FooterProps) {
  const dict = await getDictionary(lang);
  const list = await content.contact.list({
    limit: 1,
    hydrate: 1,
  });
  const contactData = list.data[0];

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Logo */}
          <div className="space-y-4">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center space-x-2"
            >
              <span className="text-2xl font-bold">Portfolio</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              {dict.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{dict.footer.contactInfo}</h3>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <LivePreviewBox
                  objectId={contactData?.id || 'add'}
                  ctdName={'about'}
                  fieldName={getFieldName('address', lang)}
                >
                  <span>
                    {getTranslatedField(contactData, 'address', lang)
                      ?.split('\n')
                      .map((item) => (
                        <span key={item}>
                          {item}
                          <br />
                        </span>
                      ))}
                  </span>
                </LivePreviewBox>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <LivePreviewBox
                  objectId={contactData?.id || 'add'}
                  ctdName={'about'}
                  fieldName={getFieldName('phone', lang)}
                >
                  <span>{getTranslatedField(contactData, 'phone', lang)}</span>
                </LivePreviewBox>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-5 w-5 shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <LivePreviewBox
                  objectId={contactData?.id || 'add'}
                  ctdName={'about'}
                  fieldName={getFieldName('phone', lang)}
                >
                  <a
                    href={`mailto:${getTranslatedField(contactData, 'email', lang)}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {getTranslatedField(contactData, 'email', lang)}
                  </a>
                </LivePreviewBox>
              </p>
            </address>
          </div>

          {/* Column 3: Contact Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{dict.footer.contactForm}</h3>
            {/* @ts-expect-error flotiq-form is a custom tag*/}
            <flotiq-form />
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Portfolio. {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
