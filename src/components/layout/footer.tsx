"use client";

import {Link} from "@/i18n/navigation";
import { Logo } from "@/components/ui/logo";
import { useLocale } from "@/i18n/locale-provider";

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <footer className="site-footer" id="contacts">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>{dictionary.footer.description}</p>
        </div>
        <div>
          <h3>{dictionary.footer.buyers}</h3>
          <Link href="/catalog">{dictionary.footer.catalog}</Link>
          <Link href="/cart">{dictionary.common.cart}</Link>
          <Link href="/checkout">{dictionary.footer.checkout}</Link>
        </div>
        <div>
          <h3>{dictionary.footer.warehouse}</h3>
          <p>{dictionary.footer.address}</p>
          <p>{dictionary.header.hours}</p>
        </div>
        <div>
          <h3>{dictionary.footer.sales}</h3>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          <a href="mailto:sales@buildmarket.demo">sales@buildmarket.demo</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{dictionary.footer.copyright}</span>
        <span>{dictionary.footer.disclaimer}</span>
      </div>
    </footer>
  );
}
