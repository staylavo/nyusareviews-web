/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add Amazon / CDN hosts here when wiring real product images via PA-API.
    remotePatterns: [
      { protocol: "https", hostname: "**.media-amazon.com" },
      { protocol: "https", hostname: "**.ssl-images-amazon.com" },
    ],
  },
};

export default nextConfig;
