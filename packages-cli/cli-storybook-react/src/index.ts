import {
  glob
} from "glob";
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

    // 查找这个目录下的 stories 文件，不包括 node_modules 目录
    const storiesFiles = await glob("stories/**/*.stories.@(js|jsx|mjs|ts|tsx)", {
      cwd: rootDir,
      ignore: [
        "**/node_modules/**"
      ]
    });

    if (storiesFiles.length === 0) {
      console.error("未找到 stories 文件");

      exit(1);
    }

    if (storiesFiles.length > 1) {
      console.error("找到多个 stories 文件");

      exit(1);
    }

    const storiesFile = storiesFiles[0];

    // 获取绝对路径
    const storiesFilePath = join(rootDir, storiesFile || "");

    // eslint-disable-next-line no-console
    console.log(storiesFilePath);

  } catch (error) {
    console.error(error);

    exit(1);
  }
}

main();
