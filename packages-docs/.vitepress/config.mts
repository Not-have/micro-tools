import {
  defineConfig,
  UserConfig,
  DefaultTheme
} from "vitepress";

import {
  menuDev,
  menuUtils,
  menuCss,
  menuComponents,
  menuTs,
  menuVite,
  menuConf,
  menuReact,
  menuVue,
  menuFetch
} from "./menu";

// https://vitepress.dev/reference/site-config
const config = async (): Promise<UserConfig<DefaultTheme.Config>> => {

  const nav: DefaultTheme.NavItem[] = [];

  const sidebar: DefaultTheme.Sidebar = {};

  const dev = await menuDev();

  const utils = await menuUtils();

  const css = await menuCss();

  const ts = await menuTs();

  const components = await menuComponents();

  const vite = await menuVite();

  const conf = await menuConf();

  const react = await menuReact();

  const vue = await menuVue();

  const fetch = await menuFetch();

  if(dev && utils && css && components && ts && vite && conf && react && vue && fetch) {
    nav.unshift(dev?.nav);
    nav.push(utils?.nav, css?.nav, components?.nav, ts?.nav, vite?.nav, conf?.nav, react?.nav, vue?.nav, fetch?.nav);

    if (dev.nav.activeMatch && ts.nav.activeMatch && react.nav.activeMatch && vue.nav.activeMatch) {
      sidebar[dev.nav.activeMatch] = dev?.menu as DefaultTheme.SidebarItem[];
      sidebar[ts.nav.activeMatch] = ts?.menu as DefaultTheme.SidebarItem[];
      sidebar[react.nav.activeMatch] = react?.menu as DefaultTheme.SidebarItem[];
      sidebar[vue.nav.activeMatch] = vue?.menu as DefaultTheme.SidebarItem[];
    }
  }

  return defineConfig({
    outDir: "./dist",
    base: "/micro-tools/",
    title: "micro tools",
    description: "一款集成常用组件、方法的工具库。",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/micro-tools/favicon.svg"
        }
      ],
      [
        "meta", {
          name: "theme-color",
          content: "#5f67ee"
        }
      ],
      [
        "meta", {
          property: "og:type",
          content: "website"
        }
      ],
      [
        "meta", {
          property: "og:site_name",
          content: "Micro Tools"
        }
      ]
    ],
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
        copyright: `© 2022-${new Date().getFullYear()}`
      },
      docFooter: {
        prev: "上一页",
        next: "下一页"
      },
      outline: {
        label: "页面导航",
        level: [
          2,
          3
        ]
      }
    }
  });
};

export default config;
