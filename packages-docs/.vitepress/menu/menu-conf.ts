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

export default async function menuConf(): Promise<IMenuRules | undefined> {

  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.CONF}`);  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      return {
        nav: {
          text: "个性化配置",
          link: `/src/${EOutDir.CONF}/${files}`
        }
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
