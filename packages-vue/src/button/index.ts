import 'element-plus/dist/index.css';

export * from './rc-container';




/**
 * ╭━━━━━━━━━━━━━╮
 * ┃ 不推荐使用 Vue┃
 * ╰━━━━━━━━━━━━━╯
 * Vue 真的很傻，他就不适合 ts 项目
 * 所以我只在 rc-container 最外层设置了 ts 类型，内部 rc 下的组件，设置了基础类型
 */
