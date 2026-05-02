// app/[lang]/page.tsx

import ExtensionsDashboard from "@/components/ExtensionsDashboard";
import { getDictionary } from "@/libs/getDictionary";
import { notFound } from "next/navigation";
import { hasLocale } from "@/libs/getDictionary";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <ExtensionsDashboard copy={dict.extensionsDashboard} />
    </>
  );
}