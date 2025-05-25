const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'api.microlink.io'],
  },
};

module.exports = withNextIntl(nextConfig); 