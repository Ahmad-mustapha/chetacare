import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object | object[];
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Chetacare | Chronic Disease Care & Prevention",
  description = "Chetacare helps individuals manage chronic conditions with preventive support, health education, and ongoing care guidance. Empowerment through holistic care.",
  canonical = "https://chetacare.com/",
  ogTitle,
  ogDescription,
  ogImage = "https://chetacare.com/assets/chetacare.png",
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noIndex = false,
}) => {
  const fullTitle = title.includes("Chetacare") ? title : `${title} | Chetacare`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
