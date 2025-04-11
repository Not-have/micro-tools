/**
 * 文本复制
 *
 * `navigator.clipboard` 可能因浏览器设置或浏览器兼容而造成兼容问题
 *
 * @param {string} text 要复制的文字
 * @param {Function} promptFn 复制成功后的回调
 */
export default function copyText(
    text: string,
    promptFn?: () => void
): Promise<unknown> {
  if (navigator.clipboard) {
    return navigator.clipboard.
        writeText(text).
        then(() => {
          promptFn && promptFn();
        }).
        catch(error => {
          console.error(error);

          return error;
        });
  }

  if (Reflect.has(document, "execCommand")) {
    return new Promise<void>((resolve, reject) => {
      const textArea = document.createElement("textarea");

      textArea.value = text;

      // 优化隐藏逻辑
      textArea.style.opacity = "0";
      textArea.style.position = "fixed";
      textArea.style.top = "0";
      textArea.style.left = "-9999px";
      textArea.setAttribute("readonly", "readonly");
      document.body.append(textArea);

      try {
        textArea.focus(); // 兼容移动端聚焦问题
        textArea.select();
        const success = document.execCommand("copy");

        if (!success) {
          throw new Error("execCommand('copy') 执行失败");
        }

        promptFn?.();
      } catch (error) {
        console.error(error);
        reject(error);
      } finally {
        textArea.remove(); // 确保清理
      }
    });
  }

  return Promise.reject(new Error("\"navigator.clipboard\" 或 \"document.execCommand\" 中存在API错误, 拷贝失败!"));
}
