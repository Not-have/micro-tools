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
  root,
  getPackagesSync,
  parseCommands
} from "./utils";

interface ICommand {
  command: string;
}

export default async function run(options: ICommand): Promise<void> {
  const {
    command = [
      "start",
      "storybook"
    ]
  } = options;

  if(!command || (Array.isArray(command) && command.length === 0)) {
    exit(1);
  }

  const lockFile = root();

  const packages = await getPackagesSync();

  // 解析命令参数
  const commands = parseCommands(command);

  const selectPkgs = packages.filter(pkg => commands.some((cmd => (pkg?.packageJson as unknown as Record<string, never>)?.scripts?.[cmd])));

  // eslint-disable-next-line no-console
  console.log(lockFile || "", selectPkgs);

  let selectPkg: string | symbol;

  if (selectPkgs.length > 1) {
    selectPkg = await select<string>({
      message: `请选择需要执行的包 ${command}:`,
      options: selectPkgs.map(item => ({
        label: `${item?.packageJson.name} (${(item?.packageJson as unknown as Record<string, never>)?.description ?? ""})`,
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
    console.error("No app found");
    exit(1);
  }

  execaCommand(`pnpm --filter=${selectPkg} run ${command}`, {
    stdio: "inherit"
  });
}
