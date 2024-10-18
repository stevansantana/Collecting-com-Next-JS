/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          pathname: '/img/**', // Define o caminho para as imagens
        },
      ],
    },
  };
  
  export default nextConfig;
  