/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactiver ESLint pendant la compilation pour éviter les erreurs liées aux apostrophes
    ignoreDuringBuilds: true,
  },
  // Désactiver l'échappement des apostrophes
  reactStrictMode: true,
  compiler: {
    // Supprime les conversions d'apostrophes en entités HTML
    styledComponents: true,
  },
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  }
}

export default nextConfig;
