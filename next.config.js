/** @type {import('next').NextConfig} */

module.exports = {
  compiler: {
    reactRemoveProperties: true,
  },
  experimental: {
    legacyBrowsers: false,
  },
}
