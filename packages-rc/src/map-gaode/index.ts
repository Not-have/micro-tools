import linkDemoCss from './link-demo-css';
import scriptDemoUtils from './script-demo-utils';
import scriptMap from './script-map';
import scriptToolbar from './script-toolbar';
import {
    IParams
} from './types';
/**
 * @deprecated 创建高德地图
 * 
 * Vue、React 参考官网使用
 * 
 * https://lbs.amap.com/api/javascript-api-v2/guide/abc/jscode
 * 
 * @param param0
 * @returns 返回高德地图的实例
 *
 * 使用：
 * 
 * import {
 *     mapGaode
 * } from "micro-util-ts";
 *
 * mapGaode({
 *     key: 'Xxx',
 *     securityCode: 'Xxx',
 *     plugins: ['AMap.Walking']
 * }).then((AMap: any) => {
 *     var map = new AMap.Map('container', {
 *         resizeEnable: true,
 *         center: [116.397428, 39.90923], //地图中心点
 *         zoom: 13 //地图显示的缩放级别
 *     });
 *
 *     //步行导航
 *     var walking = new AMap.Walking({
 *         map: map,
 *         panel: 'panel'
 *     });
 *     //根据起终点坐标规划步行路线
 *     walking.search([116.399028, 39.845042], [116.436281, 39.880719], function (status, result) {
 *         // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
 *         if (status === 'complete') {
 *             console.log('绘制步行路线完成');
 *         } else {
 *             console.error('步行路线数据查询失败' + result);
 *         }
 *     });
 * });
 */
export default async function mapGaode({
    key,
    securityCode,
    version = '2.0',
    plugins
}: IParams): Promise<unknown> {
    // @ts-ignore
    window._AMapSecurityConfig = {
        securityJsCode: securityCode
    };

    await linkDemoCss();
    await scriptDemoUtils();
    await scriptToolbar();
    return await scriptMap({
        key,
        version,
        plugins
    });
}