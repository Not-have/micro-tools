/**
 * 是否为 DOM
 * @param element 元素
 * @return {element is Element}
 */
export default function isElement(element: any): element is Element {
  return (
    element instanceof Element ||
        (element &&
            typeof element.nodeType === "number" &&
            typeof element.nodeName === "string")
  );
}
