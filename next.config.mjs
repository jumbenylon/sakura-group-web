/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'standalone',
images: {
unoptimized: true,
},
// Suppress hydration warnings from third-party scripts/extensions
reactStrictMode: true,
};

export default nextConfig;
