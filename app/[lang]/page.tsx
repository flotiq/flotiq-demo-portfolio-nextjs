import { content, helpers } from '@/flotiq-api-client';
import { ProjectHydrated } from '@flotiq/flotiq-api-sdk';
import { getDictionary } from '@/app/[lang]/dictionaries';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/app/_components/ui/card';
import { getTranslatedField } from '@/app/_lib/helpers';

type HomePageParams = {
  readonly params: Promise<{ readonly lang: string }>;
};

export default async function Home({ params }: HomePageParams) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const projectList: ProjectHydrated[] = await content.project
    .list({ hydrate: 1 })
    .then((response) => {
      return response.data;
    });

  return (
    <div className="space-y-8">
      <section className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          {dict.portfolio.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {dict.portfolio.description}
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((item) => (
          <Link
            key={item.id}
            href={`/${lang}/portfolio/${item.slug}`}
            className="group transition-all duration-200"
          >
            <Card className="h-full overflow-hidden transition-colors hover:border-primary/50">
              <div className="aspect-video relative">
                <Image
                  src={
                    helpers.getMediaUrl(item.headerImage || [], {
                      width: 610,
                      type: 'image',
                      omitFileName: false,
                    }) || '/placeholder.svg'
                  }
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold group-hover:text-primary">
                  {getTranslatedField(item, 'name', lang)}
                </h2>
                <p className="mt-2 line-clamp-3 text-muted-foreground">
                  {getTranslatedField(item, 'short_description', lang)}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
