// Scripts/check-install.js

/**
 * @deprecated 运行下来出 👾 了
 */
const {
  execSync
} = require("child_process");

try {

  // 尝试运行 only-allow 和 husky install 命令
  execSync("npx only-allow pnpm");
  // eslint-disable-next-line no-console
  console.log("Running \"only-allow\" command...");

  /**
     * 从 package.json 中 抽离到这的，原内容    "prepare": "husky install",
     */
  execSync("husky install");
  // eslint-disable-next-line no-console
  console.log("Running \"husky install\" command...");

  // eslint-disable-next-line no-console
  console.log(process.argv);

  // 如果上述命令没有报错，继续安装依赖
  execSync("pnpm run boot");
  // eslint-disable-next-line no-console
  console.log("Running \"pnpm install\" command...");
} catch (error) {
  execSync("pnpm run clear && pnpm run clear:lock");
  // eslint-disable-next-line no-console
  console.error("error:", `${error.message }，请使用 pnpm 下载依赖`);
  process.exit(1); // 终止进程
}
