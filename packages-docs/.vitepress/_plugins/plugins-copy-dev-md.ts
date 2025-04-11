import fs from "fs";
import path from "path";

function checkFileExists(dirPath, fileName): boolean {
  const filePath = path.join(dirPath, fileName);

  return fs.existsSync(filePath);
}

interface IReadmes {
  title: string;
  content: string;
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

export default function pluginCopyDevMd({
  outDir,
  entry
}: IProps): IPluginCopyDevMd {
  return {
    name: "plugins-md-from-dev",
    transformIndexHtml(html: string): string {

      const dirPath = path.resolve(__dirname, `../../src/${outDir}`);

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {
          recursive: true
        });
      }

      const packagesDir = path.resolve(__dirname, `../../../${entry}`);

      fs.readdir(packagesDir, (err, files) => {
        if (err) {
          console.error("读取目录时出错:", err);
        } else {

          if (checkFileExists(packagesDir, fileName)) {
            const readmePath = path.resolve(packagesDir, fileName);

            if (fs.existsSync(readmePath)) {
              const content = fs.readFileSync(readmePath, "utf8");

              const outputFilePath = path.resolve(__dirname, `../../src/${outDir}/${entry}.md`);

              fs.writeFileSync(outputFilePath, content);

              return;

            }
          }

          // 过滤出所有有效的包目录，假设只关心文件夹
          const packageDirs = files.filter(file => {
            const filePath = path.join(packagesDir, file);

            return fs.statSync(filePath).isDirectory(); // 只处理目录
          });

          // 处理 README.md 文件
          const readmes:IReadmes[] = packageDirs.map(pkg => {
            const readmePath = path.resolve(packagesDir, pkg, fileName);

            if (fs.existsSync(readmePath)) {
              const content = fs.readFileSync(readmePath, "utf8");

              return {
                title: pkg,
                content
              };
            }

            return null;
          }).filter((pkg): pkg is IReadmes => pkg !== null);

          // // 动态生成页面
          readmes.forEach(readme => {
            const outputFilePath = path.resolve(__dirname, `../../src/${outDir}/${readme.title}.md`);

            fs.writeFileSync(outputFilePath, readme.content);
          });
        }
      });

      return html;
    }
  };
}
