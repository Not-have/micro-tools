import {
  exit
} from "process";

import {
  findMonorepoRoot,
  getPackages
} from "./monorepo";

interface ICommand {
  command: string;
}

export default async function run(options: ICommand) {
  const {
    command = "start"
  } = options;

  if(!command) {
    exit(1);
  }

  const lockFile = findMonorepoRoot();

  const packages = await getPackages();

  // eslint-disable-next-line no-console
  console.log(lockFile || "", packages);
}
