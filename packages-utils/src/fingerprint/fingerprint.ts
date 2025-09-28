import {
  deviceAll,
  DeviceAllOptions
} from "../device";
import flattenAndSort from "../flatten-and-sort";
import sha256Base64 from "../sha256-base64";
import fingerprintAudio from "./fingerprint-audio";
import fingerprintCanvas from "./fingerprint-canvas";
import fingerprintFonts from "./fingerprint-fonts";
import fingerprintWebgl from "./fingerprint-webgl";

type TFingerprintOptions = Omit<DeviceAllOptions, "location" | "memory">;

const defaultOptions: TFingerprintOptions = {
  operatingSystem: true,
  browser: true,
  language: true,
  onLine: true,
  screen: false,
  cpuCores: true,
  hardwareConcurrency: true,
  features: true,
  sensor: true,
  i18n: true,
  ua: true,
  publicIp: false
};

/**
 * 🫆
 *
 * @param strength 是否强指纹，默认强指纹
 *
 * 指纹是根据浏览器环境生成的唯一标识符，用于识别浏览器环境
 *
 * 一下可能产生不同指纹的情况：
 *
 * 不同的屏幕（屏幕尺寸、屏幕密度，推荐一直放在主屏幕上使用）
 *
 * 不同的设备
 *
 * 不同的浏览器
 *
 * 不同的操作系统
 *
 * 不同的语言
 */
export default async function fingerprint(options: TFingerprintOptions = defaultOptions): Promise<string> {
  const device = await deviceAll({
    location: false,
    memory: false,
    ...options
  });

  const canvas = fingerprintCanvas();

  const audio = await fingerprintAudio();

  const webgl = fingerprintWebgl();

  const fonts = fingerprintFonts();

  const {
    i18n,
    ...deviceWithoutI18n
  } = device;

  const fp = {
    canvas,
    audio,
    webgl,
    fonts,
    ...deviceWithoutI18n,
    timeZone: i18n?.timeZone,
    daylightSaving: i18n?.daylightSaving,
    numberFormat: i18n?.numberFormat,
    currencyFormat: i18n?.currencyFormat
  };

  const flat = flattenAndSort(fp);

  const json = JSON.stringify(flat);

  const hash = await sha256Base64(json);

  return hash;
}
