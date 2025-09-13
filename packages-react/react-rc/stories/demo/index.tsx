import React from "react";

import {
  KeyValue
} from "../../src";
const POEM = "古诗一首";

export default function Demo(): React.ReactElement {
  const o = {
    hello: "world",
    yuck: "fou",
    [POEM]: "丽丽一上船 意思有空刃 业火十八家 充分测于是 - 不要想歪了 - 离离原上草 一岁一枯荣 野火烧不尽 春风吹又生",
    empty: "null",
    empty2: "qqq",
    empty3: "111",
    empty4: "undefined"
  };

  return <div>
    <p>React Ant Design Extra</p>

    <KeyValue
      horizontal
      ignoreEmpty
      o={o}
      wrapValue />
  </div>;
}
