# micro-rc-container

## 1、下载

```bash
npm i micro-rc-container
```

## 2、cssGenerateTriangle

css 三角形

```rc
import {
    cssGenerateTriangle
} from "micro-rc-container";

<div style=`${cssGenerateTriangle("red", 10)}`></div>
```

## 3、imitationViteError

生成一个类似 Vite 报错的提示

<img src="https://not-have.github.io/file/images/vite-error.png" alt="ErrorOverlay" style="zoom:40%;" />

```rc
import {
    imitationViteError
} from 'micro-rc';

const overlay = imitationViteError(err);

document.body.appendChild(overlay);

// 或

获取到的页面元素.appendChild(overlay);
```

## ~~4、mapGaode~~

高德地图[懒加载](https://lbs.amap.com/api/javascript-api-v2/guide/abc/load)渲染

[地图 JS API 1.4](https://lbs.amap.com/api/javascript-api/summary)

[地图 JS API 2.0](https://lbs.amap.com/api/javascript-api-v2/summary)

[api](https://lbs.amap.com/api)

[Web 服务 API](https://lbs.amap.com/api/webservice/summary)

[Vue](https://lbs.amap.com/api/javascript-api-v2/guide/abc/amap-vue)、[React](https://lbs.amap.com/api/javascript-api-v2/guide/abc/amap-react) 的使用，也可根据官方提供的方式来。（推荐）

```rc
<div id="container"></div>

import {
    mapGaode
} from "micro-util-ts";

mapGaode({
    key: 'Xxx',
    securityCode: 'Xxx',
    plugins: ['AMap.Walking']
}).then((AMap: any) => {
    var map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923], //地图中心点
        zoom: 13 //地图显示的缩放级别
    });
 
    //步行导航
    var walking = new AMap.Walking({
        map: map,
        panel: 'panel'
    });
    //根据起终点坐标规划步行路线
    walking.search([116.399028, 39.845042], [116.436281, 39.880719], function (status, result) {
        // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
        if (status === 'complete') {
            console.log('绘制步行路线完成');
        } else {
            console.error('步行路线数据查询失败' + result);
        }
    });
});
```

注：我只封装了 js 链接的加载，具体的使用，参考 [JS API 示例](https://lbs.amap.com/demo/javascript-api-v2/example/map-lifecycle/map-show)，文档中怎么使用，你就在这块怎么书写。
