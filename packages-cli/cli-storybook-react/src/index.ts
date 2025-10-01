/* eslint-disable no-console */
import {
  execa
} from "execa";
import {
  readFileSync
} from "fs";
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

    console.log(`🚀 启动 Storybook for: ${rootDir}`);

    try {
      const configPath = `${rootDir}/storybook.config.ts`;

      console.log(`📄 尝试读取配置文件: ${configPath}`);

      // 先尝试直接读取文件内容，避免模块解析问题
      const configContent = readFileSync(configPath, "utf8");

      console.log("✅ 成功读取 storybook.config.ts 文件");

      // 解析 config 和 preview 变量
      const configMatch = configContent.match(/config:\s*(\{[^}]*\})/);

      const previewMatch = configContent.match(/preview:\s*(\{[^}]*\})/);

      if (configMatch) {
        console.log("📋 config 配置:", configMatch[1]);

        // 更新 .storybook/main.ts 文件
        await updateMainConfig(configMatch[1], rootDir);
      } else {
        console.log("⚠️ 未找到 config 配置");
      }

      if (previewMatch) {
        console.log("📋 preview 配置:", previewMatch[1]);

        // 更新 .storybook/preview.ts 文件
        await updatePreviewConfig(previewMatch[1], rootDir);
      } else {
        console.log("⚠️ 未找到 preview 配置");
      }

    } catch {

      console.log("⚠️ 读取 storybook.config.ts 失败");
    }

    exit(1);

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
