/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
      SECRET_KEY: process.env.SECRET_KEY,
      ACCESS_KEY: process.env.ACCESS_KEY
  },
  images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
};

export default nextConfig;