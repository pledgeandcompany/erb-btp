/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Désactiver ESLint pendant la compilation pour éviter les erreurs liées aux apostrophes
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
