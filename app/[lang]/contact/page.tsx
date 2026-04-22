import { getDictionary } from '../dictionaries';
import { MapPin, Phone, Mail } from 'lucide-react';
import { content } from '@/flotiq-api-client';
import { getFieldName, getTranslatedField } from '@/app/_lib/helpers';
import { LivePreviewBox } from '@flotiq/nextjs-live-preview/server';

type ContactPageParams = {
  readonly params: Promise<{
    readonly lang: string;
  }>;
};

export default async function ContactPage({ params }: ContactPageParams) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const list = await content.contact.list({
    limit: 1,
    hydrate: 1,
  });
  const contactData = list.data[0];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <LivePreviewBox
          data={contactData}
          fieldName={getFieldName('contact_title', lang)}
        >
          <h1 className="text-4xl font-bold tracking-tight">
            {getTranslatedField(contactData, 'contact_title', lang)}
          </h1>
        </LivePreviewBox>
        <LivePreviewBox
          data={contactData}
          fieldName={getFieldName('description', lang)}
        >
          <p className="text-xl text-muted-foreground max-w-3xl">
            {getTranslatedField(contactData, 'description', lang)}
          </p>
        </LivePreviewBox>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4">
            <LivePreviewBox
              data={contactData}
              fieldName={getFieldName('get_in_touch_title', lang)}
            >
              <h2 className="text-2xl font-semibold">
                {getTranslatedField(contactData, 'get_in_touch_title', lang)}
              </h2>
            </LivePreviewBox>
            <LivePreviewBox
              data={contactData}
              fieldName={getFieldName('get_in_touch_description', lang)}
            >
              <p className="text-lg text-muted-foreground">
                {getTranslatedField(
                  contactData,
                  'get_in_touch_description',
                  lang,
                )}
              </p>
            </LivePreviewBox>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">{dict.contact.address}</h3>
                <LivePreviewBox
                  data={contactData}
                  fieldName={getFieldName('address', lang)}
                >
                  <address className="not-italic text-muted-foreground">
                    {getTranslatedField(contactData, 'address', lang)
                      ?.split('\n')
                      .map((item) => (
                        <span key={item}>
                          {item}
                          <br />
                        </span>
                      ))}
                  </address>
                </LivePreviewBox>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">{dict.contact.phone}</h3>
                <LivePreviewBox
                  data={contactData}
                  fieldName={getFieldName('phone', lang)}
                >
                  <p className="text-muted-foreground">
                    {getTranslatedField(contactData, 'phone', lang)}
                  </p>
                </LivePreviewBox>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">{dict.contact.email}</h3>
                <LivePreviewBox
                  data={contactData}
                  fieldName={getFieldName('email', lang)}
                >
                  <a
                    href={`mailto:${getTranslatedField(contactData, 'email', lang)}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {getTranslatedField(contactData, 'email', lang)}
                  </a>
                </LivePreviewBox>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <LivePreviewBox
              data={contactData}
              fieldName={getFieldName('business_hours_title', lang)}
            >
              <h2 className="text-2xl font-semibold">
                {getTranslatedField(contactData, 'business_hours_title', lang)}
              </h2>
            </LivePreviewBox>
            <div className="space-y-2">
              {getTranslatedField(contactData, 'business_hours', lang)?.map(
                (hours) => (
                  <p className="flex justify-between" key={hours.day}>
                    <span className="font-medium">{hours.day}</span>
                    <span className="text-muted-foreground">{hours.hours}</span>
                  </p>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <LivePreviewBox
              data={contactData}
              fieldName={getFieldName('send_a_message_title', lang)}
            >
              <h2 className="text-2xl font-semibold">
                {getTranslatedField(contactData, 'send_a_message_title', lang)}
              </h2>
            </LivePreviewBox>
            <LivePreviewBox
              data={contactData}
              fieldName={getFieldName('send_a_message_description', lang)}
            >
              <p className="text-muted-foreground">
                {getTranslatedField(
                  contactData,
                  'send_a_message_description',
                  lang,
                )}
              </p>
            </LivePreviewBox>
          </div>

          {/* @ts-expect-error flotiq-form is a custom tag*/}
          <flotiq-form />
        </div>
      </div>
    </div>
  );
}
