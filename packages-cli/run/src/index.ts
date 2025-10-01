import {
  cac
} from "cac";
import {
  exit
} from "process";

import run from "./run";

try {
  const cli = cac("run");

  cli.command("[script]").
      usage("Run script.").
      option("--root <path>", "指定 monorepo 根目录").
      action(async (command: string, options: { root?: string }) => {
        await run({
          command,
          root: options.root
        });
      });

  cli.on("command:*", () => {
    console.error("Invalid command!");

    exit(1);
  });

  cli.usage("run");
  cli.help();
  cli.parse();
} catch (error) {
  console.error(error);

  exit(1);
}
