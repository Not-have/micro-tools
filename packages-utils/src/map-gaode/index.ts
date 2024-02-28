import linkDemoCss from './link-demo-css';
import scriptDemoUtils from './script-demo-utils';
import scriptMap from './script-map';
import scriptToolbar from './script-toolbar';
import { IProps } from './types';
/**
 * 创建高德地图
 * @param param0
 * @returns 返回高德地图的实例
 */
export default async function mapGaode({
    key,
    securityCode,
    version = '2.0',
    plugins
}: IProps): Promise<unknown> {
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