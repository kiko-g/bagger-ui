/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.continente.pt",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.auchan.pt",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
