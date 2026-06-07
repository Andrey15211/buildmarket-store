"use client";

import {Link} from "@/i18n/navigation";
import { useLocale } from "@/i18n/locale-provider";

export default function NotFound() {
  const { dictionary } = useLocale();

  return (
    <section className="page-section">
      <div className="container empty-state">
        <span className="not-found-code">404</span>
        <h1>{dictionary.notFound.title}</h1>
        <p>{dictionary.notFound.text}</p>
        <Link className="button button-primary" href="/catalog">{dictionary.home.goCatalog}</Link>
      </div>
    </section>
  );
}
