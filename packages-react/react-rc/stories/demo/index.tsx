import React from "react";

import styled from "styled-components";

import {
  KeyValue
} from "../../src";

const ScDiv = styled.div`
  width: 600px;
  background-color: #f0f0f0;
`;

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

  return <ScDiv>
    <p>React RC</p>
    <hr />

    <KeyValue
      ignoreEmpty
      o={o}/>
  </ScDiv>;
}
