/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',        // para todas las rutas
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests'
          }
        ]
      }
    ]
  },
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
