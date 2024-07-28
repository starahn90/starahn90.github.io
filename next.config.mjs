const prefix = process.env.NODE_ENV === 'production' ? 'https://starahn90.github.io/' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
};

export default nextConfig;
