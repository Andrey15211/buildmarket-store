import type {Metadata} from "next";
import { Oswald, Roboto } from "next/font/google";
import {hasLocale, NextIntlClientProvider} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {routing} from "@/i18n/routing";
import {dictionaries} from "@/i18n/dictionaries";
import "../globals.css";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const {locale} = await params;
  const dictionary = dictionaries[
    hasLocale(routing.locales, locale) ? locale : routing.defaultLocale
  ];

  return {
    title: {
      default: `${dictionary.catalog.title} | BuildMarket`,
      template: "%s | BuildMarket",
    },
    description: dictionary.catalog.intro,
  };
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${roboto.variable} ${oswald.variable}`}>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
