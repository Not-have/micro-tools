import {
  execa
} from "execa";
import {
  existsSync,
  readFileSync,
  writeFileSync
} from "fs";
import {
  join
} from "path";
import {
  exit
} from "process";

import {
  root
} from "./utils";

async function main(): Promise<void> {
  try {
    const rootDir = root();

    // 读取并修改 .storybook/main.ts 文件
    await updateStorybookConfig(rootDir);

    // 运行 CLI 工具自己的 test 脚本
    await execa("pnpm", [
      "run",
      "storybook"
    ], {
      cwd: __dirname,
      stdio: "inherit"
    });

  } catch (error) {
    console.error("❌ 运行失败:", error);
    exit(1);
  }
}

async function updateStorybookConfig(rootDir: string): Promise<void> {

  // 获取当前文件的目录
  const currentDir = __dirname;

  const storybookMainPath = join(currentDir, "..", ".storybook", "main.ts");

  if (!existsSync(storybookMainPath)) {
    console.error("❌ 未找到 .storybook/main.ts 文件");
    exit(1);
  }

  try {

    // 读取文件内容
    let content = readFileSync(storybookMainPath, "utf8");

    // 计算相对路径
    const cliDir = join(currentDir, "..");

    const relativePath = rootDir.replace(cliDir, "..");

    // 替换 stories 路径
    content = content.replace(
        /"stories":\s*\[[\s\S]*?\]/,
        `"stories": [
          "${relativePath}/stories/**/*.mdx",
          "${relativePath}/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
        ]`
    );

    // 写回文件
    writeFileSync(storybookMainPath, content);

    // eslint-disable-next-line no-console
    console.log("✅ 已更新 .storybook/main.ts 配置");
    // eslint-disable-next-line no-console
    console.log(`📁 目标目录: ${rootDir}`);

  } catch (error) {
    console.error("❌ 更新配置文件失败:", error);
    exit(1);
  }
}

main();
