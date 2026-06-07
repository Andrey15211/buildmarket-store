"use client";

import { useLocale } from "@/i18n/locale-provider";
import {usePathname, useRouter} from "@/i18n/navigation";
import type {AppLocale} from "@/i18n/routing";
import {useSearchParams} from "next/navigation";

export function LocaleSwitcher() {
  const {locale} = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function changeLocale(nextLocale: AppLocale) {
    const query = Object.fromEntries(searchParams.entries());
    router.replace({pathname, query}, {locale: nextLocale});
  }

  return (
    <div className="locale-switcher" aria-label="Language">
      <button
        className={locale === "ru" ? "active" : ""}
        type="button"
        onClick={() => changeLocale("ru")}
      >
        RU
      </button>
      <button
        className={locale === "en" ? "active" : ""}
        type="button"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
