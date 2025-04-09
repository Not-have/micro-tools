import {
  defineConfig,
  UserConfig,
  DefaultTheme
} from "vitepress";

import {
  pluginsMdFromDev
} from "./_plugins";
import {
  navBar,
  menuRules
} from "./menu";

// https://vitepress.dev/reference/site-config
const config = async (): Promise<UserConfig<DefaultTheme.Config>> => {

  const nav: DefaultTheme.NavItem[] = [...navBar];

  const sidebar: DefaultTheme.Sidebar = {};

  const rules = await menuRules();

  if(rules) {
    nav.unshift(rules?.nav);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sidebar[rules.nav.activeMatch] = rules?.menu;
  }

  return defineConfig({
    title: "Micro tools",
    description: "一款集成常用组件、方法的工具库。",
    themeConfig: {
      logo: "/logo.svg",
      nav,
      sidebar,
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/Not-have/micro-tools"
        }
      ],
      footer: {
        message: "基于 MIT 许可发布",
        copyright: `© 2024-${new Date().getFullYear()}`
      },
      docFooter: {
        prev: "上一页",
        next: "下一页"
      },
      outline: {
        label: "页面导航",
        level: [2, 3]
      }
    },
    vite: {
      plugins: [
        pluginsMdFromDev()
      ]
    }
  });
};

export default config;
