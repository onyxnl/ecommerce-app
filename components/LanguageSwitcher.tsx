'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang; // replace current language
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>EN</button>&nbsp;|&nbsp;
      <button onClick={() => switchLanguage('fr')}>FR</button>
    </div>
  );
}