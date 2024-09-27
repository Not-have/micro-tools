/**
 * 获取设备类型
 * @returns
 */
export const validataOS = () => {
  if (navigator.userAgent.indexOf("Window") > -1) {
    return "Windows";
  }

  if (navigator.userAgent.indexOf("Mac OS X") > -1) {
    return "Mac";
  }

  if (navigator.userAgent.indexOf("Linux") > -1) {
    return "Linux";
  }

  return "NUll";
};
