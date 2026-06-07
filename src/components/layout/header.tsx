"use client";

import {Link} from "@/i18n/navigation";
import { Menu, Phone } from "lucide-react";
import {Suspense} from "react";
import { CartLink } from "@/components/cart/cart-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { Logo } from "@/components/ui/logo";
import { useLocale } from "@/i18n/locale-provider";

export function Header() {
  const { dictionary } = useLocale();

  return (
    <>
      <div className="service-bar">
        <div className="container service-bar-inner">
          <span>{dictionary.header.area}</span>
          <span>{dictionary.header.hours}</span>
          <a href="tel:+74951234567">
            <Phone size={14} />
            +7 (495) 123-45-67
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label={dictionary.header.navLabel}>
            <Link href="/catalog">{dictionary.common.catalog}</Link>
            <Link href="/#delivery">{dictionary.common.delivery}</Link>
            <Link href="/#benefits">{dictionary.common.business}</Link>
            <Link href="/#contacts">{dictionary.common.contacts}</Link>
          </nav>
          <Suspense fallback={<div className="locale-switcher" aria-hidden="true" />}>
            <LocaleSwitcher />
          </Suspense>
          <CartLink />
          <Link className="mobile-catalog-link" href="/catalog" aria-label={dictionary.header.catalogLabel}>
            <Menu size={24} />
          </Link>
        </div>
      </header>
    </>
  );
}
