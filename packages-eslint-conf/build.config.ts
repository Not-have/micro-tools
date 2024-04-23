/**
 * docs:
 * https://cn.rollupjs.org/
 * 
 * https://zhuanlan.zhihu.com/p/671414552
 * https://juejin.cn/post/7211053184730562618
 * https://juejin.cn/post/7325317730951774235
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    clean: true,
    entries: ['src/ts', 'src/vue'],
    declaration: true,
    rollup: {
        emitCJS: true,
    },
});