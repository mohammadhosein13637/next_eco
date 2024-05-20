/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/dashboard',
            permanent: true, // This makes the redirection permanent
          },
        ];
      },
};

export default nextConfig;
