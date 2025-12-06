import {
  withPwa
} from "@vite-pwa/vitepress";
import {
  defineConfig,
  UserConfig,
  DefaultTheme
} from "vitepress";

import {
  pwa
} from "./_plugins";
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
  menuFetch,
  menuCli
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

  const cli = await menuCli();

  if(dev && utils && css && components && ts && vite && conf && react && vue && fetch && cli) {
    nav.unshift(dev?.nav);
    nav.push(utils?.nav, css?.nav, components?.nav, ts?.nav, vite?.nav, conf?.nav, react?.nav, vue?.nav, fetch?.nav, cli?.nav);

    if (dev.nav.activeMatch && ts.nav.activeMatch && react.nav.activeMatch && vue.nav.activeMatch && cli.nav.activeMatch) {
      sidebar[dev.nav.activeMatch] = dev?.menu as DefaultTheme.SidebarItem[];
      sidebar[ts.nav.activeMatch] = ts?.menu as DefaultTheme.SidebarItem[];
      sidebar[react.nav.activeMatch] = react?.menu as DefaultTheme.SidebarItem[];
      sidebar[vue.nav.activeMatch] = vue?.menu as DefaultTheme.SidebarItem[];
      sidebar[cli.nav.activeMatch] = cli?.menu as DefaultTheme.SidebarItem[];
    }
  }

  return defineConfig({
    pwa: pwa(),
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
        },
        {
          icon: "juejin",
          link: "https://juejin.im/user/3465273327490062/posts"
        },
        {
          icon: "npm",
          link: "https://www.npmjs.com/~not-have-warehouse"
        },
        {
          icon: "csdn",
          link: "https://blog.csdn.net/qq_45669178"
        },
        {
          icon: {
            svg: "<svg role=\"img\" viewBox=\"0 0 24 24\"><path d=\"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.636H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z\"/></svg>"
          },
          link: "mailto:2233792530@qq.com"
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

export default withPwa(config);
