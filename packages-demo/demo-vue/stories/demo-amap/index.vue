<script setup lang="ts">
import {
  onMounted,
  onUnmounted
} from "vue";

import {
  createInfoWindowContent,
  createMark,
  destroyMap,
  getLocation,
  initMap
} from "./utils";

const lineArr = [
  [116.478935, 39.997761],
  [116.478939, 39.997825],
  [116.478912, 39.998549],
  [116.478912, 39.998549],
  [116.478998, 39.998555],
  [116.478998, 39.998555],
  [116.479282, 39.99856],
  [116.479658, 39.998528],
  [116.480151, 39.998453],
  [116.480784, 39.998302],
  [116.480784, 39.998302],
  [116.481149, 39.998184],
  [116.481573, 39.997997],
  [116.481863, 39.997846],
  [116.482072, 39.997718],
  [116.482362, 39.997718],
  [116.483633, 39.998935],
  [116.48367, 39.998968],
  [116.484648, 39.999861]
];

let AMap: any, map: any, marker: any;

onMounted(async () => {

  const mapObj = await initMap("container");

  AMap = mapObj.AMap;
  map = mapObj.map;

  await getLocation();
});

onUnmounted(() => {
  destroyMap();
});

const handleRenderingRouteClick = (): void => {

  // eslint-disable-next-line no-new
  new AMap.Polyline({
    map,
    path: lineArr,
    showDir: true,
    strokeColor: "#3777FF", // 线颜色
    strokeOpacity: 1,
    strokeWeight: 6 // 线宽
  });

  // 在每个点添加圆形标记
  lineArr.forEach((position, index) => {
    marker = new AMap.Marker({
      content: createMark(),
      map,
      offset: new AMap.Pixel(-5, -5),
      position
    });

    // 添加鼠标悬停事件监听器
    marker.on("mouseover", () => {
      const infoWindow = new AMap.InfoWindow({
        closeWhenClickMap: false,
        content: createInfoWindowContent(index + 1),
        isCustom: true, // 使用自定义窗体
        offset: new AMap.Pixel(0, -20)
      });

      infoWindow.open(map, position);
    });

    // 添加鼠标移出事件监听器
    marker.on("mouseout", () => {
      map.clearInfoWindow();
    });
  });
};

const handleCarRouteClick = (): void => {
  marker = new AMap.Marker({
    icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
    map,
    offset: new AMap.Pixel(-13, -26),
    position: [116.478935, 39.997761]
  });

  const passedPolyline = new AMap.Polyline({ // 隐藏使用 passedPolyline.hide();
    map,
    strokeColor: "#AF5",  // 线颜色
    strokeWeight: 6      // 线宽
  });

  // @ts-ignore
  marker.on("moving", e => {
    passedPolyline.setPath(e.passedPath);
    map.setCenter(e.target.getPosition(), true);
  });

  map.setFitView();
};

const startAnimation = (): void => {
  marker.moveAlong(lineArr, {

    // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
    autoRotation: true,

    // 每一段的时长
    duration: 500 // 可根据实际采集时间间隔设置
  });
};

const pauseAnimation = (): void => {
  marker.pauseMove();
};

const resumeAnimation = (): void => {
  marker.resumeMove();
};

const stopAnimation = (): void => {
  marker.stopMove();
};

const handleCancelMapRenderClick = (): void => {
  map.clearMap();
};
</script>

<template>
  <div>
    <div id="container"></div>
    <button @click="handleRenderingRouteClick">
      渲染路线
    </button>
    <button @click="handleCarRouteClick">
      渲染小车
    </button>
    <input
      type="button"
      value="开始动画"
      @click="startAnimation"
    />
    <input
      type="button"
      value="暂停动画"
      @click="pauseAnimation"
    />
    <input
      type="button"
      value="继续动画"
      @click="resumeAnimation"
    />
    <input
      type="button"
      value="停止动画"
      @click="stopAnimation"
    />
    <button @click="handleCancelMapRenderClick">
      取消所有的渲染
    </button>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
