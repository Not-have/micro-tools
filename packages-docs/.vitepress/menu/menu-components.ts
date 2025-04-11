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

export default async function menuComponents(): Promise<IMenuRules | undefined> {

  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.COMPONENTS}`);  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      return {
        nav: {
          text: "组件",
          link: `/src/${EOutDir.COMPONENTS}/${files}`
        }
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
