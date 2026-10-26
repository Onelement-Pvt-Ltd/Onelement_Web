const SITE_URL = "https://onelement.in";

const toAbsoluteUrl = (value) => {
  if (!value) return null;
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return null;
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Onelement Energy",
  legalName: "Onelement Energy Private Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/OEPL_BLUE_BGD_FAVICON.png`,
  email: "info@onelement.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Onelement Energy",
  url: SITE_URL,
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});
