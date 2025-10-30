import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Jujube Farm Experience: Why You Should Visit at Least Once | Basecamp Jujube Ranch",
  description:
    "Discover the magic of organic jujube farming in California's Lucerne Valley. Learn what makes a farm visit unforgettable, the health benefits of jujubes, and why this experience should be on your bucket list.",
  keywords: [
    "jujube farm California",
    "Lucerne Valley farm visit",
    "organic jujube picking",
    "farm experience Southern California",
    "jujube health benefits",
    "family farm activities",
    "u-pick farm California",
    "desert orchard tour",
    "sustainable farming California",
    "jujube cultivation",
    "farm to table experience",
    "agritourism California",
    "traditional farming methods",
    "organic fruit picking",
    "educational farm tour",
  ],
  authors: [{ name: "Basecamp Jujube Ranch" }],
  openGraph: {
    title: "The Jujube Farm Experience: Why You Should Visit at Least Once",
    description:
      "Experience the peace and beauty of organic jujube farming in California. Hand-pick fresh jujubes, learn traditional farming methods, and create lasting family memories.",
    url: "https://jujufarm.com/articles/jujube-farm-experience",
    siteName: "Basecamp Jujube Ranch",
    images: [
      {
        url: "https://jujufarm.com/gallery/walking-through-orchard.webp",
        width: 1200,
        height: 630,
        alt: "Visitors walking through jujube orchard at Basecamp Jujube Ranch",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Jujube Farm Experience: Why You Should Visit at Least Once",
    description:
      "Discover organic jujube farming in California's Lucerne Valley. A perfect family experience combining education, nature, and unforgettable memories.",
    images: ["https://jujufarm.com/gallery/walking-through-orchard.webp"],
  },
  alternates: {
    canonical: "https://jujufarm.com/articles/jujube-farm-experience",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Jujube Farm Experience: Why You Should Visit at Least Once",
  description:
    "Discover the magic of organic jujube farming in California's Lucerne Valley. Learn what makes a farm visit unforgettable and why this experience should be on your bucket list.",
  image: "https://jujufarm.com/gallery/walking-through-orchard.webp",
  datePublished: "2025-10-15",
  dateModified: "2025-10-15",
  author: {
    "@type": "Organization",
    name: "Basecamp Jujube Ranch",
    url: "https://jujufarm.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Basecamp Jujube Ranch",
    logo: {
      "@type": "ImageObject",
      url: "https://jujufarm.com/jujube-logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://jujufarm.com/articles/jujube-farm-experience",
  },
  keywords:
    "jujube farm California, organic farming, farm visit, Lucerne Valley, agritourism, jujube health benefits, family activities, sustainable agriculture",
}
