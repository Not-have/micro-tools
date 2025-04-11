import fs from "fs";
import path from "path";

function checkFileExists(dirPath, fileName): boolean {
  const filePath = path.join(dirPath, fileName);

  return fs.existsSync(filePath);
}

interface IPluginCopyDevMd {
  name: string;
  transformIndexHtml: (html: string) => string;
}

interface IProps {

  /**
   * 输出目录
   */
  outDir: string;

  /**
   * 入口文件
   */
  entry: string;
}

const fileName = "README.md";

export default function pluginCopyMd({
  outDir,
  entry
}: IProps): IPluginCopyDevMd {
  return {
    name: "plugins-copy-md",
    transformIndexHtml(html: string): string {

      // 1. 创建输出目录，递归创建（不存在则创建）
      const outputDir = path.resolve(__dirname, `../../src/${outDir}`);

      fs.mkdirSync(outputDir, {
        recursive: true
      });

      // 2. 确定 packages 目录路径
      const packagesDir = path.resolve(__dirname, `../../../${entry}`);

      // 3. 如果 packages 目录下直接存在 README.md，则直接复制该文件
      if (checkFileExists(packagesDir, fileName)) {
        const content = fs.readFileSync(path.join(packagesDir, fileName), "utf8");

        fs.writeFileSync(path.join(outputDir, `${entry}.md`), content);
      } else {

        // 4. 否则，读取 packages 目录下所有子目录（仅处理目录）
        const files = fs.readdirSync(packagesDir);

        const packageDirs = files.filter(file => {
          const filePath = path.join(packagesDir, file);

          return fs.statSync(filePath).isDirectory();
        });

        // 5. 针对每个子目录，查找 README.md 文件，如果存在则复制到输出目录下，并以目录名称命名
        packageDirs.forEach(pkg => {
          const readmePath = path.join(packagesDir, pkg, fileName);

          if (fs.existsSync(readmePath)) {
            const content = fs.readFileSync(readmePath, "utf8");

            fs.writeFileSync(path.join(outputDir, `${pkg}.md`), content);
          }
        });
      }

      return html;
    }
  };
}
