import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://onelement.in";
const routes = [
  { path: "/", file: "../dist/index.html", indexable: true },
  { path: "/about", file: "../dist/about/index.html", indexable: true },
  { path: "/about/teams", file: "../dist/about/teams/index.html", indexable: true },
  { path: "/about/vision-mission", file: "../dist/about/vision-mission/index.html", indexable: true },
  { path: "/technologies", file: "../dist/technologies/index.html", indexable: true },
  { path: "/articles", file: "../dist/articles/index.html", indexable: false },
  { path: "/admin/views", file: "../dist/admin/views/index.html", indexable: false },
];

const failures = [];
const check = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const route of routes) {
  const html = await readFile(fileURLToPath(new URL(route.file, import.meta.url)), "utf8");
  const canonical = `${SITE_URL}${route.path}`;
  check(/<title>[^<]{10,}<\/title>/i.test(html), `${route.path}: missing or short title`);
  check(
    !route.indexable || /<meta name="description" content=".{40,}" \/>/i.test(html),
    `${route.path}: missing or short description`,
  );
  check(html.includes(`<link rel="canonical" href="${canonical}" />`), `${route.path}: incorrect canonical URL`);
  check(html.includes(`content="${route.indexable ? "index, follow, max-image-preview:large" : "noindex, nofollow"}"`), `${route.path}: incorrect robots policy`);
  check(html.includes('property="og:title"'), `${route.path}: missing Open Graph title`);
  check(html.includes('name="twitter:title"'), `${route.path}: missing X/Twitter title`);
}

const sitemap = await readFile(fileURLToPath(new URL("../dist/sitemap.xml", import.meta.url)), "utf8");
for (const route of routes.filter((route) => route.indexable)) {
  check(sitemap.includes(`<loc>${SITE_URL}${route.path}</loc>`), `${route.path}: missing from sitemap`);
}
check(!sitemap.includes("/admin/"), "Private admin route must not appear in the sitemap");
check(!sitemap.includes("/articles</loc>"), "Coming-soon articles route must not appear in the sitemap");
check(!sitemap.includes("/about/VM"), "Legacy vision and mission route must not appear in the sitemap");

if (failures.length) {
  console.error(`SEO validation failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`SEO validation passed for ${routes.length} generated route pages.`);
