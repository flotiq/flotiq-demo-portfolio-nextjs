import { content, helpers } from '@/flotiq-api-client';
import { getFieldName, getTranslatedField } from '@/app/_lib/helpers';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '../../dictionaries';
import { Badge } from '@/app/_components/ui/badge';
import { ChevronLeft } from 'lucide-react';
import { LivePreviewBox } from '@flotiq/nextjs-live-preview/server';

type PortfolioPageParams = {
  readonly params: Promise<{
    readonly slug: string;
    readonly lang: string;
  }>;
};

export default async function PortfolioPage({ params }: PortfolioPageParams) {
  const { slug, lang } = await params;
  const projectData = await content.project.list({
    limit: 1,
    filters: { slug: { type: 'equals', filter: slug } },
    hydrate: 1,
  });

  if (!projectData?.data?.[0]) {
    return notFound();
  }
  const project = projectData.data[0];
  const projectImage = project.headerImage?.[0];

  const dict = await getDictionary(lang);

  return (
    <div className="space-y-8">
      <Link
        href={`/${lang}`}
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        {dict.portfolio.backToProjects}
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <LivePreviewBox data={project} fieldName={getFieldName('name', lang)}>
            {getTranslatedField(project, 'name', lang)}
          </LivePreviewBox>
        </h1>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-lg">
        {projectImage && (
          <Image
            className="object-cover"
            src={helpers.getMediaUrl(projectImage)}
            fill
            alt={projectImage.alt || project.name}
          />
        )}
      </div>
      <LivePreviewBox
        data={project}
        fieldName={getFieldName('description', lang)}
      >
        <div
          className="prose max-w-none dark:prose-invert text-lg"
          dangerouslySetInnerHTML={{
            __html:
              getTranslatedField(project, 'description', lang) || '<p></p>',
          }}
        />
      </LivePreviewBox>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Gallery</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {project.gallery?.map((image) => (
            <div
              key={image.id}
              className="relative aspect-video overflow-hidden rounded-lg"
            >
              <Image
                src={helpers.getMediaUrl(image)}
                alt={image.alt || image.fileName}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
