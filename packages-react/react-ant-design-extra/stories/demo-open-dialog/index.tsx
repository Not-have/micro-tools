import React, {
  useCallback
} from "react";

import {
  Button
} from "antd";

import {
  open,
  DialogMode
} from "../../src";
import Content from "./content";

// 模拟真实的 API 请求
const mockApiRequest = (val: Record<string, unknown>): Promise<Record<string, unknown>> => new Promise((resolve, reject) => {

  // eslint-disable-next-line no-console
  console.log(val, "val");

  // 模拟网络延迟
  const delay = Math.random() * 2000 + 1000; // 1-3秒随机延迟

  setTimeout(() => {

    // 模拟 90% 成功，10% 失败
    if (Math.random() > 0.4) {
      resolve({
        id: Date.now(),
        name: "张三",
        email: "zhangsan@example.com",
        createdAt: new Date().toISOString(),
        status: "success"
      });
    } else {
      reject(new Error("网络请求失败，请重试"));
    }
  }, delay);
});

export default function Demo(): React.ReactElement {
  const handleClick = useCallback(() => {
    open({
      title: "我是标题",
      content: <Content />,
      onSubmit: data => mockApiRequest(data as Record<string, unknown>),
      mode: DialogMode.MODAL,
      backdropClosable: false
    }).then(result => {
      // eslint-disable-next-line no-console
      console.log("提交成功:", result);
    }).catch(error => {
      // eslint-disable-next-line no-console
      console.log("提交失败:", error);
    });
  }, []);

  return <div>
    <p>React Ant Design Extra Dialog</p>
    <Button onClick={handleClick}>Click me</Button>
  </div>;
}
