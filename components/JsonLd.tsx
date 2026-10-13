import { SITE_CONFIG, CORE_SERVICES, INFRASTRUCTURE_SERVICES } from "@/data/site-data";

export default function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://elifdev.com/#organization",
    name: SITE_CONFIG.name,
    legalName: "ELIF DEV Tech Agency",
    url: SITE_CONFIG.meta.url,
    logo: SITE_CONFIG.logoUrl,
    image: SITE_CONFIG.logoUrl,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.whatsappNumber,
    email: SITE_CONFIG.email,
    priceRange: "$$",
    currenciesAccepted: "IDR, USD",
    paymentAccepted: "Bank Transfer, Credit Card, QRIS",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Indonesia",
    },
    sameAs: [
      SITE_CONFIG.socials.instagram,
      SITE_CONFIG.socials.tiktok,
      SITE_CONFIG.socials.facebook,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ELIF DEV Services & Infrastructure",
      itemListElement: [
        ...CORE_SERVICES.map((srv, idx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: srv.title,
            description: srv.shortDesc,
          },
          position: idx + 1,
        })),
        ...INFRASTRUCTURE_SERVICES.map((infra, idx) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: infra.title,
            description: infra.shortDesc,
          },
          position: CORE_SERVICES.length + idx + 1,
        })),
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
