import {
  select,
  cancel,
  isCancel
} from "@clack/prompts";
import {
  execaCommand
} from "execa";
import {
  exit
} from "process";

import {
  getPackagesSync,
  parseCommands
} from "./utils";

interface ICommand {
  command: string;

  /**
   * 根目录
   */
  root?: string;
}

export default async function run(options: ICommand): Promise<void> {
  const {
    command = [
      "start",
      "dev",
      "storybook"
    ]
  } = options;

  if(!command || (Array.isArray(command) && command.length === 0)) {
    exit(1);
  }

  const packages = await getPackagesSync(options.root);

  // 解析命令参数
  const commands = parseCommands(command);

  const selectPkgs = packages.
      filter(pkg => commands.some((cmd => (pkg?.packageJson as unknown as Record<string, never>)?.scripts?.[cmd]))).
      map(pkg => {
        const matchedCommand = commands.find(cmd => (pkg?.packageJson as unknown as Record<string, never>)?.scripts?.[cmd]);

        return {
          ...pkg,
          type: matchedCommand // 使用第一个匹配的命令作为类型
        };
      });

  let selectPkg: string | symbol;

  if (selectPkgs.length > 1) {
    selectPkg = await select<string>({
      message: "请选择需要执行的包:",
      options: selectPkgs.map(item => ({
        label: `${item?.packageJson.name} (${(item?.packageJson as unknown as Record<string, never>)?.description ?? ""}) [${item.type}]`,
        value: item?.packageJson.name
      }))
    });

    if (isCancel(selectPkg) || !selectPkg) {
      cancel("👋 已取消");
      exit(0);
    }
  } else {
    selectPkg = selectPkgs[0]?.packageJson?.name ?? "";
  }

  if (!selectPkg) {
    console.error("未找到需要执行的包");
    exit(1);
  }

  // 找到选中的包并获取其类型
  const selectedPkg = selectPkgs.find(pkg => pkg?.packageJson?.name === selectPkg);

  const scriptType = selectedPkg?.type || commands[0];

  execaCommand(`pnpm --filter=${selectPkg} run ${scriptType}`, {
    stdio: "inherit"
  });
}
