import {
  exit
} from "process";

import {
  root,
  getPackagesSync
} from "./utils";

interface ICommand {
  command: string;
}

export default async function run(options: ICommand): Promise<void> {
  const {
    command = "start"
  } = options;

  if(!command) {
    exit(1);
  }

  const lockFile = root();

  const packages = await getPackagesSync();

  const selectPkgs = packages.filter(pkg => (pkg?.packageJson as unknown as Record<string, never>)?.scripts?.[command]);

  // eslint-disable-next-line no-console
  console.log(lockFile || "", selectPkgs);
}
