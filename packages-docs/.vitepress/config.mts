import {
  defineConfig,
  UserConfig,
  DefaultTheme
} from "vitepress";

import {
  EEntry,
  EOutDir
} from "./enum";
import {
  pluginCopyMd
} from "./_plugins";
import {
  navBar,
  menuRules,
  menuUtils,
  menuCss,
  menuComponents,
  menuTs
} from "./menu";

// https://vitepress.dev/reference/site-config
const config = async (): Promise<UserConfig<DefaultTheme.Config>> => {

  const nav: DefaultTheme.NavItem[] = [...navBar];

  const sidebar: DefaultTheme.Sidebar = {};

  const rules = await menuRules();

  const utils = await menuUtils();

  const css = await menuCss();

  const ts = await menuTs();

  const components = await menuComponents();

  if(rules && utils && css && components && ts) {
    nav.unshift(rules?.nav);
    nav.push(utils?.nav, css?.nav, components?.nav, ts?.nav);

    if (rules.nav.activeMatch && ts.nav.activeMatch) {
      sidebar[rules.nav.activeMatch] = rules?.menu as DefaultTheme.SidebarItem[];
      sidebar[ts.nav.activeMatch] = ts?.menu as DefaultTheme.SidebarItem[];
    }
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
        pluginCopyMd({
          outDir: EOutDir.DEV,
          entry: EEntry.DEV
        }),
        pluginCopyMd({
          outDir: EOutDir.UTILS,
          entry: EEntry.UTILS
        }),
        pluginCopyMd({
          outDir: EOutDir.CSS,
          entry: EEntry.CSS
        }),
        pluginCopyMd({
          outDir: EOutDir.COMPONENTS,
          entry: EEntry.COMPONENTS
        }),
        pluginCopyMd({
          outDir: EOutDir.TS,
          entry: [EEntry.TYPES, EEntry.ENUM]
        })
      ]
    }
  });
};

export default config;
