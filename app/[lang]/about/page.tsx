import { content, helpers } from '@/flotiq-api-client';
import Image from 'next/image';
import { getFieldName, getTranslatedField } from '@/app/_lib/helpers';
import { LivePreviewBox } from '@flotiq/nextjs-live-preview/server';

type AboutPageParams = {
  readonly params: Promise<{
    readonly lang: string;
  }>;
};

export default async function AboutPage({ params }: AboutPageParams) {
  const { lang } = await params;
  const list = await content.about.list({
    limit: 1,
    hydrate: 1,
  });
  const aboutData = list.data[0];

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <LivePreviewBox
          objectId={aboutData?.id || 'add'}
          ctdName={'about'}
          fieldName={getFieldName('name', lang)}
        >
          <h1 className="text-4xl font-bold tracking-tight">
            {getTranslatedField(aboutData, 'name', lang)}
          </h1>
        </LivePreviewBox>
        <LivePreviewBox
          objectId={aboutData?.id || 'add'}
          ctdName={'about'}
          fieldName={getFieldName('description', lang)}
        >
          <p className="text-xl text-muted-foreground max-w-3xl">
            {getTranslatedField(aboutData, 'description', lang)}
          </p>
        </LivePreviewBox>
      </div>

      {/* Company Description */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <LivePreviewBox
            objectId={aboutData?.id || 'add'}
            ctdName={'about'}
            fieldName={getFieldName('story_title', lang)}
          >
            <h2 className="text-3xl font-semibold">
              {getTranslatedField(aboutData, 'story_title', lang)}
            </h2>
          </LivePreviewBox>
          <LivePreviewBox
            objectId={aboutData?.id || 'add'}
            ctdName={'about'}
            fieldName={getFieldName('story', lang)}
          >
            <div
              className="space-y-4 text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html:
                  getTranslatedField(aboutData, 'story', lang) || '<p></p>',
              }}
            />
          </LivePreviewBox>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-[400px] overflow-hidden rounded-lg">
          <Image
            src={helpers.getMediaUrl(aboutData.story_image || [])}
            alt={
              getTranslatedField(aboutData, 'story_title', lang) || 'Our Story'
            }
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-muted/40 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <LivePreviewBox
            objectId={aboutData?.id || 'add'}
            ctdName={'about'}
            fieldName={getFieldName('mission_title', lang)}
          >
            <h2 className="text-3xl font-semibold">
              {getTranslatedField(aboutData, 'mission_title', lang)}
            </h2>
          </LivePreviewBox>
          <LivePreviewBox
            objectId={aboutData?.id || 'add'}
            ctdName={'about'}
            fieldName={getFieldName('mission_description', lang)}
          >
            <p className="text-lg text-muted-foreground">
              {getTranslatedField(aboutData, 'mission_description', lang)}
            </p>
          </LivePreviewBox>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 pt-4">
            {getTranslatedField(aboutData, 'mission_item', lang)?.map(
              (item, index) => (
                <div
                  key={item.title}
                  className="bg-background p-6 rounded-lg shadow-xs space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <LivePreviewBox
            objectId={aboutData?.id || 'add'}
            ctdName={'about'}
            fieldName={getFieldName('team_title', lang)}
          >
            <h2 className="text-3xl font-semibold">
              {getTranslatedField(aboutData, 'team_title', lang)}
            </h2>
          </LivePreviewBox>
          <LivePreviewBox
            objectId={aboutData?.id || 'add'}
            ctdName={'about'}
            fieldName={getFieldName('team_description', lang)}
          >
            <p className="text-lg text-muted-foreground">
              {getTranslatedField(aboutData, 'team_description', lang)}
            </p>
          </LivePreviewBox>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {getTranslatedField(aboutData, 'team', lang)?.map((member) => (
            <div key={member.name} className="group space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {member.image?.[0] && (
                  <Image
                    src={helpers.getMediaUrl(member.image || [])}
                    alt={member.name || 'Team Member'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="space-y-2 text-center">
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-8">
        <LivePreviewBox
          objectId={aboutData?.id || 'add'}
          ctdName={'about'}
          fieldName={getFieldName('journey_title', lang)}
        >
          <h2 className="text-3xl font-semibold">
            {getTranslatedField(aboutData, 'journey_title', lang)}
          </h2>
        </LivePreviewBox>

        <div className="space-y-12">
          {getTranslatedField(aboutData, 'journey', lang)?.map(
            (journey, index) => (
              <div
                key={journey.year}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/3 space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    {journey.year}
                  </div>
                  <h3 className="text-xl font-semibold">{journey.title}</h3>
                </div>
                <div className="md:w-2/3 border-l-2 border-muted pl-4 space-y-4">
                  <p className="text-muted-foreground">{journey.description}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
