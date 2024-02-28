import {
    head
} from '../const';
import {
    IProps
} from '../types';

interface IParams extends Omit<IProps, 'securityCode'> {}

/**
 * 创建地图
 *
 * 插件是异步加载
 *
 * https://lbs.amap.com/api/javascript-api-v2/guide/abc/plugins
 */
export default function scriptMap({
    key,
    version = '2.0',
    plugins
}: IParams): Promise<unknown>{
    return new Promise((resolve, reject) => {
        const element: HTMLScriptElement = document.createElement('script');
        element.type = 'text/javascript';
        element.src = 'https://webapi.amap.com/loader.js';
        head.appendChild(element);

        element.onload = () => {
            // @ts-ignore
            resolve(AMapLoader.load({
                key: key, //申请好的 Web 端开发者 Key，调用 load 时必填
                version: version, //指定要加载的 JS API 的版本，缺省时默认为 1.4.15
                plugins: plugins //需要使用的的插件列表
            }));
        };
        element.onerror = (err) => {
            reject(err);
            throw new Error('Map loading failed!');
        };
    });
}