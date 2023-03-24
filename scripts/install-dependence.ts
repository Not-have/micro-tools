const { exec } = require('child_process');
/**
 * 获取一下传进来的参数，就可以执行指令了
 */
exec('pnpm add axios -w && pnpm -F * add axios', (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`✅ install completed`);
})