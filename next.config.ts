import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {protocol: "https", hostname: "vancoillieithulp.be"},
      {protocol: "https", hostname: "www.vancoillieithulp.be"},
      {protocol: "https", hostname: "vancoilliestudio.be"},
      {protocol: "https", hostname: "www.vancoilliestudio.be"},
    ],
  },
};

export default withNextIntl(nextConfig);
