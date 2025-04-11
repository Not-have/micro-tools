import {
  defineConfig,
  UserConfig,
  DefaultTheme
} from "vitepress";

import {
  navBar,
  menuRules,
  menuUtils,
  menuCss,
  menuComponents,
  menuTs,
  menuVite,
  menuConf
} from "./menu";

// https://vitepress.dev/reference/site-config
const config = async (): Promise<UserConfig<DefaultTheme.Config>> => {

  const nav: DefaultTheme.NavItem[] = [];

  const sidebar: DefaultTheme.Sidebar = {};

  const rules = await menuRules();

  const utils = await menuUtils();

  const css = await menuCss();

  const ts = await menuTs();

  const components = await menuComponents();

  const vite = await menuVite();

  const conf = await menuConf();

  if(rules && utils && css && components && ts && vite && conf) {
    nav.unshift(rules?.nav);
    nav.push(utils?.nav, css?.nav, components?.nav, ts?.nav, vite?.nav, conf?.nav);

    if (rules.nav.activeMatch && ts.nav.activeMatch) {
      sidebar[rules.nav.activeMatch] = rules?.menu as DefaultTheme.SidebarItem[];
      sidebar[ts.nav.activeMatch] = ts?.menu as DefaultTheme.SidebarItem[];
    }
  }

  const _nav = [...nav, ...navBar];

  return defineConfig({
    outDir: "dist",
    title: "Micro tools",
    description: "一款集成常用组件、方法的工具库。",
    themeConfig: {
      logo: "/logo.svg",
      nav: _nav,
      sidebar,
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/Not-have/micro-tools"
        }
      ],
      footer: {
        message: "基于 MIT 许可发布",
        copyright: `© 2022-${new Date().getFullYear()}`
      },
      docFooter: {
        prev: "上一页",
        next: "下一页"
      },
      outline: {
        label: "页面导航",
        level: [2, 3]
      }
    }
  });
};

export default config;
