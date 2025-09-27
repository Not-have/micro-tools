/**
 * 获取UA
 *
 * userAgent 属性返回一个包含浏览器厂商和版本信息的字符串
 *
 * @returns string UA
 */
export default function deviceUa(): string {
  return navigator.userAgent;
}
