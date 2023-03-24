import fs from 'fs';
import inquirer from 'inquirer'; // 文档：http://www.npmdoc.org/inquirerzhongwenwendanginquirer-jszhongwenjiaochengjiexi.html
// 如果要指定安装环境，需要给安装环境前，加入 --
(function () {
    const data = fs.readFileSync('./test.md', 'utf8').split(/\r\n|\n|\r/gm);

    // 基础使用 引入(nodeAPI)： import readline from 'readline';
    /*
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(`更新内容：`, name => {
      console.log(`你好 ${name}!`);
      if (!name) return;
      rl.close();
    });
    */
    inquirer.prompt([{
        type: 'input',
        message: '当前发布版本：',
        name: 'version',
        validate: function (value) {
            if (/^\d+(?:\.\d+){2}$/.test(value)) {
                return true;
            }
            return '不符合版本号规则。';
        },
        prefix: '🟢'
    }, {
        type: 'input',
        message: '更新内容：',
        name: 'content',
        validate: function (value) {
            if (value) {
                return true;
            }
            return '更新描述，不能为空。';
        },
        prefix: '🟢'
    }]).then((answers) => {
        // console.log(' ', answers);
        // 修改版本文件 和 package.json 中的 version
        data.splice(1, 0, `\n## ${answers.version} \n* ${answers.content}`);
        fs.writeFileSync('./test.md', data.join('\r\n'));
        // 修改成功后，在这进行 发布

    }).catch((error) => {
        console.log(' ', error);
    });
})();