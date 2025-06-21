import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      new URL('https://moviesdatabase.p.rapidapi.com/titles**'),
      new URL('https://m.media-amazon.com/**')
    ],
  },
}

export default nextConfig;
