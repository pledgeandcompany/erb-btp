import { Metadata } from 'next';
import { generateCanonicalUrl } from './canonical-url';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  author?: string;
  openGraph?: {
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: string;
    locale?: string;
    siteName?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    nocache?: boolean;
    googleBot?: string;
  };
  alternates?: {
    languages?: Record<string, string>;
    types?: Record<string, string>;
  };
}

export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  author = 'ERB-BTP',
  openGraph = {},
  twitter = {},
  robots = {},
  alternates = {},
}: SeoProps): Metadata {
  const canonicalUrl = generateCanonicalUrl(path);
  const formattedKeywords = keywords.join(', ');
  
  return {
    title,
    description,
    keywords: formattedKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: 'ERB-BTP',
    alternates: {
      canonical: canonicalUrl,
      ...(alternates.languages && { languages: alternates.languages }),
      ...(alternates.types && { types: alternates.types }),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: openGraph.siteName || 'ERB-BTP',
      locale: openGraph.locale || 'fr_FR',
      type: (openGraph.type as "website" | "article" | "book" | "profile") || 'website',
      images: openGraph.images || [
        {
          url: '/og-logo.png',
          width: 1200,
          height: 630,
          alt: 'ERB-BTP Construction et Rénovation',
        }
      ],
    },
    twitter: {
      card: twitter.card || 'summary_large_image',
      site: twitter.site || '@erbbtp',
      title,
      description,
      images: openGraph.images 
        ? openGraph.images.map(img => typeof img === 'string' ? img : img.url)
        : ['/og-logo.png'],
    },
    robots: {
      index: robots.index !== false,
      follow: robots.follow !== false,
      nocache: robots.nocache || false,
      googleBot: robots.googleBot || 'index,follow',
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}
