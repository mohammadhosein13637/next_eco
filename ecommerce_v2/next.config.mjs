/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard',
            permanent: false, 
          },
          {
            source: '/main',
            destination: '/dashboard',
            permanent: false, 
          },
        ];
      },
      images: {
        domains: ['picsum.photos'],
      },
};

export default nextConfig;
