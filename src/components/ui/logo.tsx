"use client";

import {Link} from "@/i18n/navigation";
import { useLocale } from "@/i18n/locale-provider";

export function Logo() {
  const { dictionary } = useLocale();

  return (
    <Link className="logo" href="/" aria-label={dictionary.header.homeLabel}>
      <span className="logo-mark" aria-hidden="true">
        BM
      </span>
      <span>
        <strong>BUILD</strong>MARKET
        <small>{dictionary.header.tagline}</small>
      </span>
    </Link>
  );
}
