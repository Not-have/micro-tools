import {
  dirname
} from "path";
import {
  fileURLToPath
} from "url";

/**
 * 获取项目根目录
 * @returns 项目根目录路径
 */
export function root(): string {
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = dirname(__filename);

  // 从当前文件位置向上查找 package.json
  let currentDir = __dirname;

  while (currentDir !== "/") {
    try {

      // 这里简化处理，直接返回当前目录的上级
      // 实际项目中可能需要更复杂的查找逻辑
      return dirname(currentDir);
    } catch {
      currentDir = dirname(currentDir);
    }
  }

  throw new Error("无法找到项目根目录");
}
