/**
 * 文本复制
 *
 * `navigator.clipboard` 可能因浏览器设置或浏览器兼容而造成兼容问题
 *
 * @param text
 * @param prompt
 * @returns
 */
export default function copyText(text: string, promptFn?: Function): Promise<unknown> {
  if (navigator.clipboard) {
    return navigator.clipboard.
        writeText(text).
        then(() => {
          promptFn && promptFn();
        }).
        catch(error => {
          // eslint-disable-next-line no-console
          console.error(error);

          return error;
        });
  }

  if (Reflect.has(document, "execCommand")) {
    return new Promise<void>((resolve, reject) => {
      try {
        const textArea = document.createElement("textarea");

        textArea.value = text;

        // 在手机 Safari 浏览器中，点击复制按钮，整个页面会跳动一下
        textArea.style.width = "0";
        textArea.style.position = "fixed";
        textArea.style.left = "-999px";
        textArea.style.top = "10px";
        textArea.setAttribute("readonly", "readonly");
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        promptFn && promptFn();
        resolve();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        reject(error);
      }
    });
  }

  return Promise.reject("\"navigator.clipboard\" 或 \"document.execCommand\" 中存在API错误, 拷贝失败!");
}
