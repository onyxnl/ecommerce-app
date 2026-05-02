// app/[lang]/layout.tsx
import Providers from "@/components/Providers";
import CustomAppbar from "@/components/CustomAppbar";
export default function LangLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: { lang: string };
  }) {
    return (
      <html lang={params.lang}>
        <body>
            <Providers>
            <CustomAppbar />
                {children}
            </Providers>
        </body>
      </html>
    );
  }