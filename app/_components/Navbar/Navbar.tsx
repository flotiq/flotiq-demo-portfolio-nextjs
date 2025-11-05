import Link from 'next/link';
import LanguageSwitcher from '@/app/_components/LanguageSwitcher/LanguageSwitcher';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { ModeToggle } from '@/app/_components/ModeToggle/ModeToggle';

type NavbarProps = {
  readonly lang: string;
};

export default async function Navbar({ lang }: NavbarProps) {
  const dictionary = await getDictionary(lang);

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="text-xl font-bold">Portfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href={`/${lang}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {dictionary.navigation.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {dictionary.navigation.about}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {dictionary.navigation.contact}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher lang={lang} dictionary={dictionary} />
          <ModeToggle dictionary={dictionary} />
        </div>
      </div>
    </header>
  );
}
