import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

const withPWA = withPWAInit({
  dest: 'public'
})

/*module.exports = {
  images: {
    remotePatterns: [
      new URL('https://moviesdatabase.p.rapidapi.com/titles**'),
      new URL('https://m.media-amazon.com/**')
    ],
  },
}*/

//export default nextConfig;
export default withPWA({
  ...nextConfig
})
