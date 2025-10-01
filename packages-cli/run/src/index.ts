import {
  cac
} from "cac";
import {
  exit
} from "process";

import run from "./run";

try {
  const cli = cac("run");

  cli.command("[script]").usage("Run script.").action(async (command: string) => {
    await run({
      command
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
