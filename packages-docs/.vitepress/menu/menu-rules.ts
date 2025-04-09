import fs from "fs";
import path from "path";

import {
  DefaultTheme
} from "vitepress";

interface IMenuRules {
  nav: DefaultTheme.NavItem;
  menu: DefaultTheme.Sidebar;
}

export default async function menuRules(): Promise<IMenuRules | undefined> {
  const packagesDir = path.resolve(__dirname, "../../src/_generate-md");  // 根据需要设置路径

  if (fs.existsSync(packagesDir)) {
    try {
      const files = await fs.promises.readdir(packagesDir);

      const filesWithoutMd = files.map(file => file.replace(".md", ""));

      return {
        nav: {
          text: "规则",
          link: `/src/_generate-md/${filesWithoutMd[0]}`,
          activeMatch: "/src/_generate-md/"
        },
        menu: filesWithoutMd.map(item => ({
          text: item,
          link: `/src/_generate-md/${item}`
        }))
      };
    } catch (error) {
      console.error("读取目录时出错:", error);
    }
  }
}
