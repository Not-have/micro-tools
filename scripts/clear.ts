// node 文档：http://dev.nodejs.cn/learn/accept-input-from-the-command-line-in-nodejs

/*
const util = require('util');
import chalk from 'chalk';
import path from 'path';
import fs from 'fs/promises';
const childProcess = require('child_process');

const appPath = path.join(__dirname, 'tmp');
console.log(appPath, 'appPath');


// package.json 中调用 ts 文件，需要下载：npm i tsx --dev --save
async function main() {
  // process.argv.slice(2).join() 可以获取 npm run test-ts aaaa 后面传入的 aaaa
  console.log(chalk.cyan('terminal 🟢'), process.argv.slice(2).join());
  await childProcess.exec("./hello.sh 哈哈哈", function (err, stdout, stderr) {
    console.log(err, 'err');
    console.log(stdout, 'stdout');
    console.log(stderr, 'stderr');
    // 删除指定路径下的文件，删除 tmp 下的 build
    setTimeout(() => {
      childProcess.exec(`rm -rf build`, {
        cwd: appPath
      });
    }, 3000);
  });


  // 获取当前路径
  console.log(path.resolve(__dirname), 'path.resolve(__dirname)');
  // 读取文件内容
  const diffOutput = await fs.readFile(
    path.resolve(__dirname, './', 'test.txt'),
    'utf-8'
  );
  console.log(diffOutput);


}

main();
*/


// 同步方法二
// 但是这个给 sh 穿参有问题，应该 是 util.promisify 引起的
/*
const util = require('util');
import chalk from 'chalk';
import path from 'path';
import fs from 'fs/promises';
const childProcess = require('child_process');

const appPath = path.join(__dirname, 'tmp');
console.log(appPath, 'appPath');
const exec = util.promisify(childProcess.exec);

// package.json 中调用 ts 文件，需要下载：npm i tsx --dev --save
async function main() {
  // process.argv.slice(2).join() 可以获取 npm run test-ts aaaa 后面传入的 aaaa
  console.log(chalk.cyan('terminal 🟢'), process.argv.slice(2).join());
  await exec("./hello.sh");

  // 删除指定路径下的文件，删除 tmp 下的 build
  await setTimeout(() => {
    childProcess.exec(`rm -rf build`, {
      cwd: appPath
    });
  }, 4000);


  // 获取当前路径
  console.log(path.resolve(__dirname), 'path.resolve(__dirname)');
  // 读取文件内容
  const diffOutput = await fs.readFile(
    path.resolve(__dirname, './', 'test.txt'),
    'utf-8'
  );
  console.log(diffOutput);
}

main();
*/

// 测试
/*
const childProcess = require('child_process');

async function main() {
  await childProcess.exec("test.sh", function (err, stdout, stderr) {
    console.log(err, 'err');
    console.log(stdout, 'stdout');
    console.log(stderr, 'stderr');
  });
}

main();
*/