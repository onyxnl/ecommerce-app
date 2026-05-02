// app/[lang]/page.tsx

import { getDictionary } from "@/libs/getDictionary";

export default async function Page({
  params,
}: {
  params: { lang: 'en' | 'fr' };
}) {
  const dict = await getDictionary(params.lang);

  return <h1>{dict.welcome}</h1>;
}