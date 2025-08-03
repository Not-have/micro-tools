import type {
  PwaOptions
} from "@vite-pwa/vitepress";

import {
  resolve
} from "node:path";

export default function pwa(): PwaOptions {
  return {
    includeManifestIcons: false,
    manifest: {
      description: "micro-tools（简称 `mt`）是一个模块化的前端工具集合，采用 monorepo 架构管理，包含多种开发中常用的工具方法、组件库、样式方案等。项目通过 pnpm workspace 实现多包管理，各子包独立维护且依赖最小化。",
      icons: [
        {
          sizes: "192x192",
          src: "https://not-have.github.io/micro-tools/favicon.svg",
          type: "image/svg+xml"
        }
      ],
      id: "/",
      name: "micro tools",
      short_name: "micro tools docs.",
      theme_color: "#ffffff"
    },
    outDir: resolve(process.cwd(), "../../dist"),
    registerType: "autoUpdate",
    workbox: {
      globPatterns: [
        "**/*.{css,js,html,svg,png,ico,txt,woff2}"
      ],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    }
  };
}
