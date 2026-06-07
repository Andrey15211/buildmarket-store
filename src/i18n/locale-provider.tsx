"use client";

import {useLocale as useNextIntlLocale} from "next-intl";
import {dictionaries, type Locale} from "./dictionaries";

export function useLocale() {
  const locale = useNextIntlLocale() as Locale;
  return {locale, dictionary: dictionaries[locale]};
}
