/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/ui/inmo_agent/:path*',
          destination: 'http://apirealstate-production.up.railway.app/ui/inmo_agent/:path*'
        }
      ];
    }
  };

export default nextConfig;
