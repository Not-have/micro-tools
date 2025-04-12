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

export default async function menuReact(): Promise<IMenuRules | undefined> {
  const packagesDir = path.resolve(__dirname, `../../src/${EOutDir.REACT}` );  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      const filesWithoutMd = files.map(file => file.replace(".md", ""));

      return {
        nav: {
          text: "React",
          link: `/src/${EOutDir.REACT}/${filesWithoutMd[0]}`,
          activeMatch: `/src/${EOutDir.REACT}/`
        },
        menu: filesWithoutMd.map(item => ({
          text: item,
          link: `/src/${EOutDir.REACT}/${item}`
        }))
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
