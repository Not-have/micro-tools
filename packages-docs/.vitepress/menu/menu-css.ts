import fs from "fs";
import path from "path";

import {
  DefaultTheme
} from "vitepress";

import {
  EOutDir
} from "../enum";

interface IMenuRules {
  nav: DefaultTheme.NavItem;
}

export default async function menuCss(): Promise<IMenuRules | undefined> {

  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.CSS}`);  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      return {
        nav: {
          text: "Css 样式",
          link: `/src/${EOutDir.CSS}/${files}`
        }
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
