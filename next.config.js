/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'az', 'tr','de','is'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
