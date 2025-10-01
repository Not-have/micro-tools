import {
  Package,
  getPackages as getPackagesFunc
} from "@manypkg/get-packages";

import _root from "./root";

/**
 * 获取大仓的所有包
 *
 * 使用的 pnpm
 *
 * 参考的是 changesets，实现的是同步版本
 *
 * https://github.com/changesets/changesets/tree/main
 */
export default async function getPackagesSync(): Promise<Package[]> {
  const root = _root();

  return getPackagesFunc(root).then(packages => packages.packages);
}
