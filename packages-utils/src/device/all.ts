import type {
  IBrowser,
  IFeatures,
  II18n,
  ILocation,
  IMemory,
  IScreen,
  ISensor
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

/**
 * 设备信息汇总接口
 */
export interface IDeviceAll {

  // 基础信息
  operatingSystem: string;
  browser: IBrowser;
  language: string;
  onLine: boolean;
  screen: IScreen;
  cpuCores: number;
  hardwareConcurrency: number;
  memory: IMemory;
  features: IFeatures;
  sensor: ISensor;
  i18n: II18n;

  // 异步信息
  location: ILocation;
  publicIp: string;
}

/**
 * 🖥️ 获取所有设备信息
 *
 * 包括同步和异步的所有设备信息
 *
 * @returns Promise<IDeviceAll> 完整的设备信息对象
 */
export default async function deviceAll(): Promise<IDeviceAll> {

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

  // 异步获取网络相关信息
  const [
    location,
    publicIp
  ] = await Promise.allSettled([
    deviceLocation(),
    devicePublicIp()
  ]);

  return {

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

    // 异步信息（处理可能的错误）
    location: location.status === "fulfilled" ? location.value : {
      latitude: -1,
      longitude: -1
    },
    publicIp: publicIp.status === "fulfilled" ? publicIp.value : "127.0.0.1"
  };
}
