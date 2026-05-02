import { getDictionary, hasLocale } from "@/libs/getDictionary";
import { notFound } from "next/navigation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return <div>{lang === "fr" ? "A propos" : "About"} - {dict.welcome}</div>;
}