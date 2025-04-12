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

export default async function menuVue(): Promise<IMenuRules | undefined> {
  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.VUE}` );  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      const filesWithoutMd = files.map(file => file.replace(".md", ""));

      return {
        nav: {
          text: "Vue",
          link: `/src/${EOutDir.VUE}/${filesWithoutMd[0]}`,
          activeMatch: `/src/${EOutDir.VUE}/`
        },
        menu: filesWithoutMd.map(item => ({
          text: item,
          link: `/src/${EOutDir.VUE}/${item}`
        }))
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
