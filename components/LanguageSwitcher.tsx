'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';

const supportedLocales = ['en', 'fr'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

export default function LanguageSwitcher() {
  const params = useParams<{ lang?: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params?.lang;

  const switchLanguage = (lang: SupportedLocale) => {
    if (!pathname || currentLocale === lang) {
      return;
    }

    const segments = pathname.split('/').filter(Boolean);

    if (currentLocale && supportedLocales.includes(currentLocale as SupportedLocale)) {
      segments[0] = lang;
    } else {
      segments.unshift(lang);
    }

    const newPath = `/${segments.join('/')}`;
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>EN</button>&nbsp;|&nbsp;
      <button onClick={() => switchLanguage('fr')}>FR</button>
    </div>
  );
}