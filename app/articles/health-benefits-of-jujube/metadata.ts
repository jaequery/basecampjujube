import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Health Benefits of Jujube: The Science-Backed Superfood | Basecamp Jujube Ranch",
  description:
    "Discover the remarkable health benefits of jujube fruit backed by scientific research. Learn about improved sleep, heart health, immune support, brain function, and more from this ancient superfood.",
  keywords: [
    "jujube health benefits",
    "jujube superfood",
    "jujube nutrition",
    "Chinese date benefits",
    "red date health benefits",
    "jujube sleep benefits",
    "jujube immune system",
    "jujube antioxidants",
    "jujube heart health",
    "natural sleep aid",
    "organic jujube California",
    "jujube vitamins minerals",
    "traditional Chinese medicine",
    "jujube brain health",
    "jujube digestive health",
  ],
  authors: [{ name: "Basecamp Jujube Ranch" }],
  openGraph: {
    title: "Health Benefits of Jujube: The Science-Backed Superfood",
    description:
      "Backed by thousands of years of traditional medicine and modern science, discover how jujube fruit supports sleep, immunity, heart health, brain function, and overall wellbeing.",
    url: "https://jujufarm.com/articles/health-benefits-of-jujube",
    siteName: "Basecamp Jujube Ranch",
    images: [
      {
        url: "https://jujufarm.com/gallery/family-picking-jujubes.webp",
        width: 1200,
        height: 630,
        alt: "Fresh organic jujubes rich in health benefits at Basecamp Jujube Ranch",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Benefits of Jujube: The Science-Backed Superfood",
    description:
      "From better sleep to stronger immunity - discover the scientifically proven health benefits of jujube fruit, an ancient superfood gaining modern recognition.",
    images: ["https://jujufarm.com/gallery/family-picking-jujubes.webp"],
  },
  alternates: {
    canonical: "https://jujufarm.com/articles/health-benefits-of-jujube",
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
  headline: "Health Benefits of Jujube: The Science-Backed Superfood",
  description:
    "Discover the remarkable health benefits of jujube fruit, backed by scientific research and thousands of years of traditional medicine use. Learn about improved sleep, cardiovascular health, immune support, and more.",
  image: "https://jujufarm.com/gallery/family-picking-jujubes.webp",
  datePublished: "2025-10-20",
  dateModified: "2025-10-20",
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
    "@id": "https://jujufarm.com/articles/health-benefits-of-jujube",
  },
  keywords:
    "jujube health benefits, superfood, sleep aid, immune support, heart health, brain health, antioxidants, organic fruit, traditional medicine, nutrition",
}
