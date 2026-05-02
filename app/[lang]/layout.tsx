// app/[lang]/layout.tsx
import { notFound } from "next/navigation";

import Providers from "@/components/Providers";
import CustomAppbar from "@/components/CustomAppbar";
import { hasLocale, SUPPORTED_LOCALES } from "@/libs/getDictionary";

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <Providers>
      <CustomAppbar />
      <div className="mt-20">
        <main>{children}</main>
      </div>
    </Providers>
  );
}