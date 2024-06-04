/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'az', 'tr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
