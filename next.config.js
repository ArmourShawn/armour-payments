/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // We'll handle ESLint separately
  },
  output: 'standalone',
};

module.exports = nextConfig; 