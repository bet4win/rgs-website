/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization is enabled (AVIF/WebP + responsive srcset via sharp).
  // This requires a Node server / Vercel runtime (`next start`). If this site is
  // ever deployed as a fully static export, re-add `images: { unoptimized: true }`.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Long cache for the static template assets served from /public.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
