import fs from "fs";
import path from "path";

interface IReadmes {
  title: string;
  content: string;
}

export default function pluginsMdFromDev() {
  return {
    name: "plugins-md-from-dev",
    transformIndexHtml(html) {

      const dirPath = path.resolve(__dirname, "../../src/_generate-md");

      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {
          recursive: true
        });
      }

      const packagesDir = path.resolve(__dirname, "../../../packages-dev");

      fs.readdir(packagesDir, (err, files) => {
        if (err) {
          console.error("读取目录时出错:", err);
        } else {

          // 过滤出所有有效的包目录，假设只关心文件夹
          const packageDirs = files.filter(file => {
            const filePath = path.join(packagesDir, file);

            return fs.statSync(filePath).isDirectory(); // 只处理目录
          });

          // 处理 README.md 文件
          const readmes:IReadmes[] = packageDirs.map(pkg => {
            const readmePath = path.resolve(packagesDir, pkg, "README.md");

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
            const outputFilePath = path.resolve(__dirname, `../../src/_generate-md/${readme.title}.md`);

            fs.writeFileSync(outputFilePath, readme.content);
          });
        }
      });

      return html;
    }
  };
}
