import type { NextConfig } from "next";
import {hostname} from "os";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
}
};

export default nextConfig;
