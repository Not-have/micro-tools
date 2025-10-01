import {
  findUpSync
} from "find-up";
import {
  readFileSync,
  statSync
} from "fs";
import {
  glob
} from "glob";
import {
  dirname,
  join
} from "path";

/**
 * 查找大仓的根目录
 * @param cwd
 */
export function findMonorepoRoot(cwd: string = process.cwd()): string {
  const lockFile = findUpSync("package.json", {
    cwd,
    type: "file"
  });

  return dirname(lockFile || "");
}

/**
 * 解析 pnpm-workspace.yaml 文件
 */
function parseWorkspaceConfig(root: string): string[] {
  const workspaceFile = join(root, "pnpm-workspace.yaml");

  try {
    const content = readFileSync(workspaceFile, "utf8");

    const lines = content.split("\n");

    const packages: string[] = [];

    let inPackagesSection = false;

    for (const line of lines) {
      const trimmedLine = line.trim();

      if (trimmedLine === "packages:") {
        inPackagesSection = true;

        continue;
      }

      if (inPackagesSection) {
        if (trimmedLine.startsWith("- ")) {
          const pattern = trimmedLine.slice(2).trim();

          packages.push(pattern);
        } else if (trimmedLine && !trimmedLine.startsWith("#")) {

          // 如果遇到非注释行且不是以 - 开头，说明 packages 部分结束
          break;
        }
      }
    }

    return packages;
  } catch (error) {
    console.error("Failed to parse pnpm-workspace.yaml:", error);

    return [];
  }
}

/**
 * 根据 glob 模式获取匹配的包路径
 */
async function getPackagesByPattern(root: string, pattern: string): Promise<string[]> {
  try {
    const matches = await glob(pattern, {
      cwd: root,
      absolute: true,
      ignore: [
        "**/node_modules/**"
      ]
    });

    const validPackages: string[] = [];

    for (const match of matches) {

      // 排除 node_modules 目录
      if (match.includes("/node_modules/") || match.endsWith("/node_modules")) {
        continue;
      }

      // 检查是否是目录
      if (!statSync(match).isDirectory()) {
        continue;
      }

      // 检查目录是否存在 package.json
      const packageJsonPath = join(match, "package.json");

      try {
        if (statSync(packageJsonPath).isFile()) {
          validPackages.push(match);
        }
      } catch {
        continue;
      }
    }

    return validPackages;
  } catch (error) {
    console.error(`Failed to glob pattern ${pattern}:`, error);

    return [];
  }
}

/**
 * 获取大仓的所有包
 */
export async function getPackages(): Promise<string[]> {
  const root = findMonorepoRoot();

  if (!root) {
    return [];
  }

  const patterns = parseWorkspaceConfig(root);

  const allPackages: string[] = [];

  const packagePromises = patterns.map(async pattern => getPackagesByPattern(root, pattern));

  const packageResults = await Promise.all(packagePromises);

  for (const packages of packageResults) {
    allPackages.push(...packages);
  }

  // 去重并排序
  return [
    ...new Set(allPackages)
  ].sort();
}
