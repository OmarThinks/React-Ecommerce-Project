/** @type {import('next').NextConfig} */

import path from "path";
const __dirname = path.resolve();

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  //basePath: "./",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
