/**
 * 第一个参数 要合并的文档地址
 * 第二个参数 合并后的文档地址
 * "test": "node ./scripts/merge-markdown.js"
 */
import {
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync
} from "fs";
// eslint-disable-next-line sort-imports
import {
  extname,
  join
} from "path";

try {

  // 定义一个函数来获取指定文件夹下的所有 Markdown 文件路径
  const getAllMarkdownFiles = folderPath => {
    const files = readdirSync(folderPath);

    const markdownFiles = files.filter(file => {
      const filePath = join(folderPath, file);

      const fileStats = statSync(filePath);

      return fileStats.isFile() && extname(filePath).toLowerCase() === ".md";
    });

    return markdownFiles.map(file => join(folderPath, file));
  };

  // 定义一个函数来读取并合并多个 Markdown 文件的内容
  const mergeMarkdownFiles = (filePaths, outputFile, title) => {
    // eslint-disable-next-line no-console
    console.log(filePaths, outputFile, title);

    try {

      // 在文件之间添加一级标题和空行来分隔
      const mergedContent = title ? `# ${ title }\n\n` : `${ filePaths.
          map(filePath => readFileSync(filePath, "utf-8")).
          // eslint-disable-next-line no-useless-concat
          join("\n" + "---" + "\n\n")}`; // 在文件之间添加空行来分隔

      writeFileSync(outputFile, mergedContent);

      // Console.log('Markdown 文件合并完成！');
    } catch (error) {

      // Console.error('合并过程出错：', error);
    }
  };

  const paths = process.argv.slice(2);

  if (paths.length !== 2) {
    // eslint-disable-next-line no-console
    console.error("❌ Markdown Url Error");
    process.exit(1); // 终止进程
  }

  // 传入要合并的 Markdown 文件路径数组和输出文件的路径
  const targetFolderPath = paths[0]; // 替换为实际的文件夹路径

  // 获取所有 Markdown 文件路径
  const markdownFilePaths = getAllMarkdownFiles(targetFolderPath);

  const outputFilePath = `${paths[1] }/README.md`; // 替换为输出文件的路径

  mergeMarkdownFiles(markdownFilePaths, outputFilePath);

  // eslint-disable-next-line no-console
  console.log("✅ Markdown Merge Success");
} catch {
  // eslint-disable-next-line no-console
  console.error("❌ Markdown Merge Fail");
}
