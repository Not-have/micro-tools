import type { App } from 'vue';

/**
 * 转换时间
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
export default function conversionTime(app: App) {
    app.directive('conversion-time', {
        mounted(el) {
            const text = el.textContent;
            console.log(text);
            let timespan: number = parseInt(text);
            // 同意格式
            if (JSON.stringify(timespan).length === 10) {
                timespan = timespan * 1000;
            }
            el.textContent = dateFormat(timespan);
        }
    });
}

function dateFormat(time: number) {
    const date = new Date(time);
    const year = date.getFullYear();
    /* 在日期格式中，月份是从0开始的，因此要加0
     * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
     */
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    // 拼接
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
}