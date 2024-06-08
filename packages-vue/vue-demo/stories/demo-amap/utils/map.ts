import AMapLoader from "@amap/amap-jsapi-loader";
let AMap, map;

export async function initMap(containerId: string): Promise<{
  AMap: unknown;
  map: unknown;
}> {

  // @ts-ignore
  window._AMapSecurityConfig = {
    securityJsCode: "2c8ebeabc42c400fdcdfa4f3dd4b2773"
  };

  AMap = await AMapLoader.load({
    key: "87c9eb5ed878e72de9a34866b05f60d2",
    version: "2.0",
    plugins: ["AMap.MoveAnimation", "AMap.Geolocation"]
  });

  map = new AMap.Map(containerId, {
    resizeEnable: true,
    zoom: 16,
    center: [116.478935, 39.997761]
  });

  return {
    AMap,
    map
  };
}

export const destroyMap = (): void => {
  map?.destroy();
};

/**
 * 把地图定位到当前位置
 *
 * 必须在 initMap 之后执行
 */
export const getLocation = (callback?: (position: unknown) => void): void => {
  const geolocation = new AMap.Geolocation({
    enableHighAccuracy: true, // 是否使用高精度定位，默认：true
    timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
    maximumAge: 0,           // 定位结果缓存0毫秒，默认：0
    convert: true,           // 自动偏移，偏移后的坐标为高德坐标，默认：true
    showButton: true,        // 显示定位按钮，默认：true
    buttonPosition: "LB",    // 定位按钮停靠位置，默认：'LB'，左下角
    buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    showMarker: true,        // 定位成功后在定位到的位置显示点标记，默认：true
    showCircle: true,        // 定位成功后用圆圈表示定位精度范围，默认：true
    panToLocation: true,     // 定位成功后将定位到的位置作为地图中心点，默认：true
    zoomToAccuracy: true,    // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    useNative: true          // 使用原生定位
  });

  map.addControl(geolocation);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  geolocation.getCurrentPosition((status: unknown, result: any) => {

    if (status === "complete") {
      map.setCenter(result.position);

      if(callback) {
        callback(result.position);
      }

    } else {

      // eslint-disable-next-line no-console
      console.error("Geolocation failed:", result);
    }
  });
};
