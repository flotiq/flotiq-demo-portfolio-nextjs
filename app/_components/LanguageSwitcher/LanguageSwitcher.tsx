'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/app/_components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { locales } from '@/app/_lib/utils';

type LanguageSwitcherProps = {
  readonly lang: string;
  // eslint-disable-next-line
  readonly dictionary: any;
};

export default function LanguageSwitcher({
  lang,
  dictionary,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Function to get the path without the language prefix
  const getPathWithoutLang = () => {
    const segments = pathname.split('/');
    segments.splice(1, 1);
    return segments.join('/') || '/';
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={`/${locale}${getPathWithoutLang()}`}
              className={lang === locale ? 'font-bold' : ''}
            >
              {dictionary.language[locale]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
