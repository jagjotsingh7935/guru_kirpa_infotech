import { useEffect } from 'react';

const SITE_NAME = 'Guru Kirpa Infotech';

interface SeoOptions {
  title: string;
  description: string;
  /** Path or absolute URL of a share image. */
  image?: string;
  /** Page path, e.g. "/projects/permitshub". Defaults to the current location. */
  path?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | null;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const absolute = (value: string) => (value.startsWith('http') ? value : window.location.origin + value);

/** Sets the title, description, canonical link, social tags and optional JSON-LD for the current page. */
export function useSeo({ title, description, image, path, noindex, jsonLd }: SeoOptions) {
  const jsonKey = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = window.location.origin + (path ?? window.location.pathname);
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setLink('canonical', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    if (image) {
      setMeta('property', 'og:image', absolute(image));
      setMeta('name', 'twitter:image', absolute(image));
    }

    let script = document.getElementById('page-jsonld') as HTMLScriptElement | null;
    if (jsonKey) {
      if (!script) {
        script = document.createElement('script');
        script.id = 'page-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = jsonKey;
    } else if (script) {
      script.remove();
    }
  }, [title, description, image, path, noindex, jsonKey]);
}
