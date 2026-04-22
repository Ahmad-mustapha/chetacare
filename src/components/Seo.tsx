import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SITE_NAME = 'Chetacare';
const SITE_URL = 'https://chetacare.com';
const DEFAULT_IMAGE = `${SITE_URL}/assets/chetacare.png`;

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const Seo = ({ title, description, image, type = 'website', noIndex = false, structuredData }: SeoProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(pathname || '/', SITE_URL).toString();
    const resolvedImage = image ? new URL(image, SITE_URL).toString() : DEFAULT_IMAGE;
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow';

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: robots });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: resolvedImage });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: resolvedImage });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    const existingScripts = document.head.querySelectorAll('script[data-seo-structured-data="true"]');
    existingScripts.forEach((script) => script.remove());

    if (structuredData) {
      const entries = Array.isArray(structuredData) ? structuredData : [structuredData];

      entries.forEach((entry) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.seoStructuredData = 'true';
        script.textContent = JSON.stringify(entry);
        document.head.appendChild(script);
      });
    }
  }, [description, image, noIndex, pathname, structuredData, title, type]);

  return null;
};

export default Seo;
