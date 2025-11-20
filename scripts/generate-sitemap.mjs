import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SITE_URL = "https://elarisdigitalsolutions.com";
const SECTION_SLUGS = ["", "servicios", "portafolio", "proceso", "clientes", "contacto"];

const now = new Date().toISOString();

const createEntry = (slug, locale) => {
  const normalizedSlug = slug === "" ? "" : `/${slug}`;
  const prefix = locale === "es" ? "/es" : "";
  const pathname = slug === "" && prefix === "" ? "/" : `${prefix}${normalizedSlug || ""}`;
  const loc = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
  const priority = slug === "" ? 1 : 0.8;
  return { loc, pathname, locale, priority };
};

const pairedEntries = SECTION_SLUGS.map((slug) => ({
  en: createEntry(slug, "en"),
  es: createEntry(slug, "es"),
}));

const buildAlternateTags = (entry) => {
  const englishPath = entry.locale === "en" ? entry.pathname : entry.pathname.replace(/^\/es/, "") || "/";
  const spanishPath = entry.locale === "es" ? entry.pathname : (entry.pathname === "/" ? "/es" : `/es${entry.pathname}`);

  const alternates = [
    { hrefLang: "en", href: `${SITE_URL}${englishPath === "/" ? "/" : englishPath}` },
    { hrefLang: "es", href: `${SITE_URL}${spanishPath}` },
    { hrefLang: "x-default", href: `${SITE_URL}${englishPath === "/" ? "/" : englishPath}` },
  ];

  return alternates
    .map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`
    )
    .join("\n");
};

const urlNodes = pairedEntries
  .flatMap(({ en, es }) => [en, es])
  .map((entry) => {
    const alternateMarkup = buildAlternateTags(entry);
    return `  <url>\n    <loc>${entry.loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${entry.priority.toFixed(1)}</priority>\n${alternateMarkup}\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlNodes}\n</urlset>\n`;

const targets = [path.resolve("public", "sitemap.xml")];
if (existsSync(path.resolve("dist"))) {
  targets.push(path.resolve("dist", "sitemap.xml"));
}

const persist = async () => {
  await Promise.all(
    targets.map(async (target) => {
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, sitemap, "utf8");
    })
  );
  console.log(`Sitemap generated at: ${targets.join(", ")}`);
};

persist().catch((error) => {
  console.error("Failed to generate sitemap", error);
  process.exitCode = 1;
});
