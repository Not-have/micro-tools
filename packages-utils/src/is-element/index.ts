/**
 * 是否为 DOM
 * @param element 元素
 * @return {element is Element}
 */
export default function isElement(element: unknown): element is Element {
  return (
    element instanceof Element ||
    element !== undefined &&
      element !== null &&
      typeof element === "object" &&
      "nodeType" in element &&
      typeof element.nodeType === "number" &&
      "nodeName" in element &&
      typeof (element as { nodeName: unknown }).nodeName === "string"
  );
}
