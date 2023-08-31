/**
 * 第一个参数 要合并的文档地址
 * 第二个参数 合并后的文档地址
 * "test": "node ./scripts/merge-markdown.js"
 */

const fs = require('fs');
const path = require('path');

try {
    // 定义一个函数来获取指定文件夹下的所有 Markdown 文件路径
    function getAllMarkdownFiles(folderPath) {
        const files = fs.readdirSync(folderPath);

        const markdownFiles = files.filter(file => {
            const filePath = path.join(folderPath, file);
            const fileStats = fs.statSync(filePath);
            return fileStats.isFile() && path.extname(filePath).toLowerCase() === '.md';
        });

        return markdownFiles.map(file => path.join(folderPath, file));
    }

    // 定义一个函数来读取并合并多个 Markdown 文件的内容
    function mergeMarkdownFiles(filePaths, outputFile) {
        try {
            const mergedContent = filePaths
                .map(filePath => fs.readFileSync(filePath, 'utf-8'))
                .join('\n' + '---' + '\n'); // 在文件之间添加空行来分隔

            fs.writeFileSync(outputFile, mergedContent);
            // console.log('Markdown 文件合并完成！');
        } catch (error) {
            // console.error('合并过程出错：', error);
        }
    }

    const paths = process.argv.slice(2);

    if (paths.length !== 2) {
        console.error('❌ Markdown Url Error');
        process.exit(1); // 终止进程
    }

    // 传入要合并的 Markdown 文件路径数组和输出文件的路径
    const targetFolderPath = paths[0]; // 替换为实际的文件夹路径

    // 获取所有 Markdown 文件路径
    const markdownFilePaths = getAllMarkdownFiles(targetFolderPath);

    const outputFilePath = paths[1] + '/README.md'; // 替换为输出文件的路径

    mergeMarkdownFiles(markdownFilePaths, outputFilePath);

    console.log('✅ Markdown Merge Success');
} catch {
    console.error('❌ Markdown Merge Fail');
}