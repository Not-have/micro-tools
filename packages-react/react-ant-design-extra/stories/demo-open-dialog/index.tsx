import React, {
  useCallback
} from "react";

import {
  Button
} from "antd";

import {
  open
} from "../../src";

export default function Demo(): React.ReactElement {

  const handleClick = useCallback(() => {

    open({
      title: "我是标题",
      content: "React Ant Design Extra Dialog"
    }).then(result => {
      // eslint-disable-next-line no-console
      console.log(result);
    });
  }, []);

  return <div>
    <p>React Ant Design Extra Dialog</p>
    <Button onClick={handleClick}>Click me</Button>
  </div>;
}
