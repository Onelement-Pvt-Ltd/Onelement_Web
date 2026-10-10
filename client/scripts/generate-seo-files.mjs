import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const SITE_NAME = "Onelement Energy";
const SITE_URL = "https://onelement.in";
const API_BASE_URL = (process.env.VITE_API_BASE_URL || "https://api.onelement.in/api").replace(/\/$/, "");
const publicSitemapPath = fileURLToPath(new URL("../public/sitemap.xml", import.meta.url));
const distRoot = fileURLToPath(new URL("../dist/", import.meta.url));
const distSitemapPath = fileURLToPath(new URL("../dist/sitemap.xml", import.meta.url));
const indexPath = fileURLToPath(new URL("../dist/index.html", import.meta.url));

const staticPages = [
  { path: "/", title: `${SITE_NAME} | Sustainable Technologies`, description: "Onelement Energy develops sustainable technologies for a cleaner, more resilient energy future.", priority: "1.0", frequency: "weekly" },
  { path: "/about", title: `About Us | ${SITE_NAME}`, description: "Learn about Onelement Energy's purpose, approach and work developing sustainable technologies for energy, environment and industry.", priority: "0.8", frequency: "monthly" },
  { path: "/about/teams", title: `Who We Are | ${SITE_NAME}`, description: "Meet the people behind Onelement Energy and learn about the team working across energy, environment and industry.", priority: "0.7", frequency: "monthly" },
  { path: "/about/vision-mission", title: `Vision and Mission | ${SITE_NAME}`, description: "Read the vision, mission and values guiding Onelement Energy's sustainable technology work.", priority: "0.7", frequency: "monthly" },
  { path: "/technologies", title: `Technologies | ${SITE_NAME}`, description: "Explore the sustainable technologies Onelement Energy is developing across clean energy, carbon management and resilient energy systems.", priority: "0.9", frequency: "weekly" },
  { path: "/blogs", title: `Insights | ${SITE_NAME}`, description: "Read Onelement Energy insights on sustainable technologies, clean energy and the global energy transition.", priority: "0.9", frequency: "weekly" },
];

const escapeXml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

const escapeHtml = (value) => String(value || "")
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;");

const absoluteUrl = (value) => {
  if (!value) return null;
  try {
    return new URL(value, SITE_URL).toString();
  } catch {
    return null;
  }
};

const fetchAll = async (endpoint, mapItem) => {
  const collected = [];
  let page = 1;
  let totalPages = 1;
  do {
    const response = await fetch(`${API_BASE_URL}/${endpoint}?page=${page}&limit=24`, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error(`${endpoint} returned ${response.status}`);
    const payload = await response.json();
    collected.push(...(payload.data || []).map(mapItem));
    totalPages = Math.min(Number(payload.pagination?.totalPages || 1), 100);
    page += 1;
  } while (page <= totalPages);
  return collected;
};

const dynamicPages = [];
try {
  const [blogs, technologies] = await Promise.all([
    fetchAll("blogs", (blog) => ({ path: `/blogs/${blog.slug}`, title: `${blog.title} | ${SITE_NAME}`, description: blog.excerpt, image: blog.coverImage, type: "article", publishedTime: blog.publishedAt, lastmod: blog.publishedAt, frequency: "monthly", priority: "0.7" })),
    fetchAll("technologies", (technology) => ({ path: `/technologies/details/${technology.slug}`, title: `${technology.title} | ${SITE_NAME}`, description: technology.banner?.subtitle || technology.description?.paragraphs?.[0] || "Explore this Onelement Energy technology.", image: technology.banner?.image, type: "website", frequency: "monthly", priority: "0.8" })),
  ]);
  dynamicPages.push(...blogs, ...technologies);
} catch (error) {
  console.warn(`Dynamic SEO pages skipped: ${error.message}`);
}

const pages = [...staticPages, ...dynamicPages]
  .filter((entry, index, all) => all.findIndex((candidate) => candidate.path === entry.path) === index);

const sitemapEntries = pages.map((entry) => {
  const lastmod = entry.lastmod ? `\n    <lastmod>${escapeXml(new Date(entry.lastmod).toISOString())}</lastmod>` : "";
  return `  <url>\n    <loc>${escapeXml(`${SITE_URL}${entry.path}`)}</loc>${lastmod}\n    <changefreq>${entry.frequency}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`;
}).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
await Promise.all([writeFile(publicSitemapPath, sitemap, "utf8"), writeFile(distSitemapPath, sitemap, "utf8")]);

const baseHtml = await readFile(indexPath, "utf8");
const replaceMeta = (html, attribute, name, content) => {
  const pattern = new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="[^"]*"\\s*/?>`, "i");
  const element = `<meta ${attribute}="${name}" content="${escapeHtml(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, element) : html.replace("</head>", `    ${element}\n  </head>`);
};

const renderHead = (page, { noindex = false } = {}) => {
  const canonical = `${SITE_URL}${page.path}`;
  let html = baseHtml
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  html = replaceMeta(html, "name", "description", page.description);
  html = replaceMeta(html, "name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
  html = replaceMeta(html, "property", "og:type", page.type || "website");
  html = replaceMeta(html, "property", "og:title", page.title);
  html = replaceMeta(html, "property", "og:description", page.description);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "name", "twitter:card", page.image ? "summary_large_image" : "summary");
  html = replaceMeta(html, "name", "twitter:title", page.title);
  html = replaceMeta(html, "name", "twitter:description", page.description);
  const image = absoluteUrl(page.image);
  if (image) {
    html = replaceMeta(html, "property", "og:image", image);
    html = replaceMeta(html, "name", "twitter:image", image);
  }
  if (page.publishedTime) html = replaceMeta(html, "property", "article:published_time", page.publishedTime);
  return html;
};

const pathToDirectory = (path) => fileURLToPath(new URL(`../dist${path.replace(/\/$/, "")}/`, import.meta.url));
for (const page of pages.filter((entry) => entry.path !== "/")) {
  const directory = pathToDirectory(page.path);
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}index.html`, renderHead(page), "utf8");
}

const adminPage = { path: "/admin/views", title: `Private Statistics | ${SITE_NAME}`, description: "Private Onelement Energy statistics." };
const adminDirectory = pathToDirectory(adminPage.path);
await mkdir(adminDirectory, { recursive: true });
await writeFile(`${adminDirectory}index.html`, renderHead(adminPage, { noindex: true }), "utf8");

console.log(`Generated ${pages.length} sitemap URLs and ${pages.length} public SEO entry pages.`);
