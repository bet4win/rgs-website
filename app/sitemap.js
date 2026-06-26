import { SITE_URL } from "@/app/lib/site";

// Served at /sitemap.xml. Single live route ("/"). The url must byte-match the
// canonical declared in app/page.jsx (apex, https, no trailing slash).
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
