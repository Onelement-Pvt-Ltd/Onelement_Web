import { useEffect } from "react";

const SITE_NAME = "Onelement Energy";
const SITE_URL = "https://onelement.in";
const DEFAULT_IMAGE = "/OEPL_BLUE_BGD_FAVICON.png";
const DEFAULT_DESCRIPTION =
  "Onelement Energy develops carbon capture, E-Fuel, PEM fuel cell and green hydrogen technologies for a cleaner, more resilient energy future.";

const toAbsoluteUrl = (value) => {
  if (!value) return null;
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return null;
  }
};

const upsertMeta = (attribute, key, content) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertCanonical = (href) => {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
  imageAlt = SITE_NAME,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  author,
  structuredData,
}) => {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Sustainable Technologies`;
    const canonicalUrl = toAbsoluteUrl(path) || SITE_URL;
    const imageUrl = toAbsoluteUrl(image || DEFAULT_IMAGE);

    document.title = pageTitle;
    upsertCanonical(canonicalUrl);
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", imageAlt);

    upsertMeta("property", "article:published_time", publishedTime);
    upsertMeta("property", "article:modified_time", modifiedTime);
    upsertMeta("name", "author", author);

    const scriptId = "onelement-structured-data";
    document.getElementById(scriptId)?.remove();
    if (structuredData) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [author, description, image, imageAlt, modifiedTime, noindex, path, publishedTime, structuredData, title, type]);

  return null;
};

export default Seo;
