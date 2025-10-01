import fs from "fs";
import path from "path";
import {
  DefaultTheme
} from "vitepress";

import {
  EOutDir
} from "../const";

interface IMenuRules {
  nav: DefaultTheme.NavItemWithLink;
  menu: DefaultTheme.Sidebar;
}

export default async function menuCli(): Promise<IMenuRules | undefined> {
  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.CLI}` );  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      const filesWithoutMd = files.map(file => file.replace(".md", ""));

      return {
        nav: {
          text: "CLI",
          link: `/src/${EOutDir.CLI}/${filesWithoutMd[0]}`,
          activeMatch: `/src/${EOutDir.CLI}/`
        },
        menu: filesWithoutMd.map(item => ({
          text: item,
          link: `/src/${EOutDir.CLI}/${item}`
        }))
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
