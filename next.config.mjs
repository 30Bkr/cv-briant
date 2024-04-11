/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'static.platzi.com',
      protocol: 'https'
    }]
  }
};

export default nextConfig;
