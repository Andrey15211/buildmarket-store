"use client";

import { useLocale } from "@/i18n/locale-provider";

export default function Loading() {
  const { dictionary } = useLocale();

  return (
    <div className="container route-loading">
      <span />
      <p>{dictionary.common.loading}</p>
    </div>
  );
}
