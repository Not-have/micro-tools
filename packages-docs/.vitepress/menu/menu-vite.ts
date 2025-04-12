import fs from "fs";
import path from "path";
import {
  DefaultTheme
} from "vitepress";

import {
  EOutDir
} from "../const";

interface IMenuRules {
  nav: DefaultTheme.NavItem;
}

export default async function menuVite(): Promise<IMenuRules | undefined> {

  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.VITE}`);  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      return {
        nav: {
          text: "Vite 插件",
          link: `/src/${EOutDir.VITE}/${files}`
        }
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
