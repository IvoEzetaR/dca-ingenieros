import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NOT_FOUND_SEO, ROUTE_SEO, SITE_URL, normalizePath } from "@/lib/seo-routes";

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string | null) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!href) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Pone title, description, canonical y Open Graph según la ruta.
 * Las rutas que no están en ROUTE_SEO (404 o categorías inventadas) quedan en noindex.
 */
export const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = normalizePath(pathname);
    const known = ROUTE_SEO[path];
    const seo = known ?? NOT_FOUND_SEO;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("property", "og:title", seo.title);
    setMeta("property", "og:description", seo.description);
    setMeta("name", "twitter:title", seo.title);
    setMeta("name", "twitter:description", seo.description);

    if (known) {
      setCanonical(url);
      setMeta("property", "og:url", url);
      document.head.querySelector('meta[name="robots"]')?.remove();
    } else {
      setCanonical(null);
      setMeta("name", "robots", "noindex, follow");
    }
  }, [pathname]);

  return null;
};
