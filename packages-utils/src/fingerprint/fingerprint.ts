import {
  deviceAll
} from "../device";
import flattenAndSort from "../flatten-and-sort";
import sha256Base64 from "../sha256-base64";
import fingerprintAudio from "./fingerprint-audio";
import fingerprintCanvas from "./fingerprint-canvas";
import fingerprintFonts from "./fingerprint-fonts";
import fingerprintWebgl from "./fingerprint-webgl";

/**
 * 🫆
 *
 * 指纹是根据浏览器环境生成的唯一标识符，用于识别浏览器环境
 *
 * @returns string 指纹
 */
export default async function fingerprint(): Promise<string> {
  const device = await deviceAll({
    location: false,
    publicIp: false,
    i18n: false,
    memory: false
  });

  const canvas = fingerprintCanvas();

  const audio = await fingerprintAudio();

  const webgl = fingerprintWebgl();

  const fonts = fingerprintFonts();

  const fp = {
    canvas,
    audio,
    webgl,
    fonts,
    ...device
  };

  const flat = flattenAndSort(fp);

  const json = JSON.stringify(flat);

  const hash = await sha256Base64(json);

  return hash;
}
