import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/defesa-busca-apreensao",
  assetPrefix: "/defesa-busca-apreensao",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/defesa-busca-apreensao",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
