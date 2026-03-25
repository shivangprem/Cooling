import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords = "AC repair, HVAC, cooling, heating, Lucknow, AC installation, AC maintenance",
  url = "https://coolingmerchants.com",
  image = "https://lh3.googleusercontent.com/pw/AP1GczOwCXa-Ho3S9PWP7nqPMVswj04IgXW-kREyC9hABRfYsxjbKY21XhMpFw12VwuIbkmAiRlYvU1GK1xrMcP08Jr9MC1gUOCnfUSWQcMBr_bG08gBsEg=s0"
}: SEOProps) {
  const siteTitle = `${title} | Cooling Merchants`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}
