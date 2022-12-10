import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypePrism from '@mapbox/rehype-prism';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'js', 'tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'ipfs',
        hostname: '**',
      },
      // { protocol: 'https', hostname: '**.placeholder.com', pathname: '/**' },
      // { protocol: 'https', hostname: '**.ens.domains', pathname: '/**' },
      // { protocol: 'https', hostname: '**.cloudinary.com', pathname: '/**' },
      // { protocol: 'https', hostname: 'ipfs.io', pathname: '/**' },
      // { protocol: 'https', hostname: 'ipfs.infura.io, pathname: '/**' },
      // { protocol: 'https', hostname: '**.alchemy.com', pathname: '/**' },
      // { protocol: 'https', hostname: '**.influenceth.io', pathname: '/**' },
      // { protocol: 'https', hostname: '**.cloudfront.net', pathname: '/**' },
    ],
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
