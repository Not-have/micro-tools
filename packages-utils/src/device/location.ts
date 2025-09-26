import {
  ILocation
} from "./types";

/**
 * 📍 位置信息 (Geolocation)
 *
 * @returns 返回一个 Promise 对象，resolve 后的值是 ILocation
 *
 * 如果浏览器不支持 geolocation，则返回 { latitude: 0, longitude: 0 }
 *
 * 如果获取失败，则返回 { latitude: -1, longitude: -1 }
 */
export default function deviceLocation(): Promise<ILocation> {
  const isSupport = "geolocation" in navigator;

  if(!isSupport) {
    return Promise.resolve({
      latitude: 0,
      longitude: 0
    });
  }

  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
        position => {
          const {
            coords
          } = position;

          resolve({
            latitude: Number(coords.latitude.toFixed(6)),
            longitude: Number(coords.longitude.toFixed(6))
          });
        },
        () => {
          resolve({
            latitude: -1,
            longitude: -1
          });
        }
    );
  });
}
