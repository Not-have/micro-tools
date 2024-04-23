/**
 *
 * 使用：
 *
 * 方法 1
 *
 * 1）main.ts 引入
 *
 * import conversionTime from './conversionTime';
 *
 * const app = createApp(App)
 *
 * app.use(draggable)
 *
 * 2）使用：
 *
 * `<span v-conversion-time>1708717740535</span>`
 *
 * 方法 2
 *
 * 1）创建一个 directives 总出口
 *
 * import conversionTime from './conversionTime';
 *
 * export default function (app) {
 *     time(app)
 * }
 *
 * 2）main.ts 引入
 *
 * import directives from "./directives/index"
 *
 * const app = createApp(App);
 *
 * directives(app)
 *
 * app.mount('#app');
 *
 * 3）使用
 *
 * `<span v-conversion-time>1708717740535</span>`
 *
 * 注：setup 语法糖貌似没办法单独引入自定义指令，必须要在 main.ts 引入
 */
export { default as directiveDraggable } from './draggable';