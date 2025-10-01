import {
  findUpSync
} from "find-up";
import {
  dirname
} from "path";

/**
 * 查找大仓的根目录
 *
 * 使用的 pnpm
 *
 * @param cwd
 */
export default function root(cwd: string = process.cwd(), fileName: string = "pnpm-workspace.yaml"): string {
  const lockFile = findUpSync(fileName, {
    cwd,
    type: "file"
  });

  return dirname(lockFile || "");
}
