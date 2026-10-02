/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/mfiy6hcu/image/upload/**",
      },
    ],
  },
};

export default nextConfig;