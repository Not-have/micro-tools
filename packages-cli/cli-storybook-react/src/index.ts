import {
  execa
} from "execa";
import {
  dirname
} from "path";
import {
  exit
} from "process";
import {
  fileURLToPath
} from "url";

import {
  root
} from "./utils";

async function main(): Promise<void> {
  try {
    const rootDir = root();

    // eslint-disable-next-line no-console
    console.log(`🚀 启动 Storybook for: ${rootDir}`);

    // 获取 CLI 工具目录
    const cliDir = dirname(fileURLToPath(import.meta.url));

    // 运行 CLI 工具自己的 storybook 脚本，并传递环境变量
    await execa("pnpm", [
      "run",
      "storybook"
    ], {
      cwd: cliDir,
      stdio: "inherit",
      env: {
        ...process.env,
        STORYBOOK_STORIES_PATH: `${rootDir}/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
        STORYBOOK_STORIES_MDX_PATH: `${rootDir}/stories/**/*.mdx`
      }
    });

  } catch (error) {
    console.error("❌ 运行失败:", error);
    exit(1);
  }
}

main();
