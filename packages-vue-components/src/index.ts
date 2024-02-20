/**
 *  不用 webpack 是因为 要配置各种东西，嫌弃麻烦
 * ╭━━━━━━━━━━━━━━━╮
 * ┃不推荐使用 Vue  ┃
 * ╰━━━━━━━━━━━━━━━╯
 * 类型维护两份！！！
 */
import 'element-plus/dist/index.css';
import 'micro-style/root.css';
import './style';

export * from './button';

export { default as Input } from './input';