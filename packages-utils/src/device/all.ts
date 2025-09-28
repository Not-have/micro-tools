import type {
  ILocation,
  IDeviceAll,
  IDeviceAllOptions
} from "./types";

import deviceBrowser from "./browser";
import deviceCpuCores from "./cpu-cores";
import deviceFeatures from "./features";
import deviceHardwareConcurrency from "./hardware-concurrency";
import deviceI18n from "./i18n";
import deviceLanguage from "./language";
import deviceLocation from "./location";
import deviceMemory from "./memory";
import deviceOnLine from "./onLine";
import deviceOperatingSystem from "./operating-system";
import devicePublicIp from "./public-ip";
import deviceScreen from "./screen";
import deviceSensor from "./sensor";
import deviceUa from "./ua";

/**
 * 🖥️ 获取所有设备信息
 *
 * 包括同步和异步的所有设备信息
 *
 * @param options 默认都为 true，可以传入 false 来禁用某些功能
 * @returns Promise<IDeviceAll> 完整的设备信息对象
 */
export default async function deviceAll(options: IDeviceAllOptions = {}): Promise<IDeviceAll> {

  // 默认选项，所有功能都启用
  const defaultOptions: Required<IDeviceAllOptions> = {
    operatingSystem: true,
    browser: true,
    language: true,
    onLine: true,
    screen: true,
    cpuCores: true,
    hardwareConcurrency: true,
    memory: true,
    features: true,
    sensor: true,
    i18n: true,
    ua: true,
    location: true,
    publicIp: true
  };

  // 合并用户选项和默认选项
  const opts = {
    ...defaultOptions,
    ...options
  };

  // 同步获取基础信息
  const operatingSystem = deviceOperatingSystem();

  const browser = deviceBrowser();

  const language = deviceLanguage();

  const onLine = deviceOnLine();

  const screen = deviceScreen();

  const cpuCores = deviceCpuCores();

  const hardwareConcurrency = deviceHardwareConcurrency();

  const memory = deviceMemory();

  const features = deviceFeatures();

  const sensor = deviceSensor();

  const i18n = deviceI18n();

  const ua = deviceUa();

  // 异步获取网络相关信息
  const asyncPromises: Promise<ILocation | string>[] = [];

  const asyncKeys: string[] = [];

  if (opts.location) {
    asyncPromises.push(deviceLocation());
    asyncKeys.push("location");
  }

  if (opts.publicIp) {
    asyncPromises.push(devicePublicIp());
    asyncKeys.push("publicIp");
  }

  const asyncResults = asyncPromises.length > 0
    ? await Promise.allSettled(asyncPromises)
    : [];

  // 处理异步结果
  let location = {
    latitude: -1,
    longitude: -1
  };

  let publicIp = "127.0.0.1";

  asyncResults.forEach((result, index) => {
    const key = asyncKeys[index];

    if (key === "location") {
      location = result.status === "fulfilled" ? result.value as ILocation : {
        latitude: -1,
        longitude: -1
      };
    } else if (key === "publicIp") {
      publicIp = result.status === "fulfilled" ? result.value as string : "127.0.0.1";
    }
  });

  const result = {

    // 基础信息
    operatingSystem,
    browser,
    language,
    onLine,
    screen,
    cpuCores,
    hardwareConcurrency,
    memory,
    features,
    sensor,
    i18n,
    ua,

    // 异步信息
    location,
    publicIp
  };

  // 根据 opts 过滤结果
  const filteredResult: Partial<IDeviceAll> = {};

  Object.keys(opts).forEach(key => {
    const optionKey = key as keyof IDeviceAllOptions;

    if (opts[optionKey]) {
      (filteredResult as Record<string, unknown>)[key] = result[key as keyof IDeviceAll];
    }
  });

  return filteredResult as IDeviceAll;
}
