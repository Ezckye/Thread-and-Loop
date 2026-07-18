import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/Thread-and-Loop",
        trailingSlash: true,
        typescript: {
          tsconfigPath: "tsconfig.pages.json",
        },
      }
    : {}),
};

export default nextConfig;
