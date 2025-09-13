import React from "react";

import {
  createResetStyle,
  createHtmlStyle
} from "../../src";

createResetStyle();
createHtmlStyle();

export default function Demo(): React.ReactElement {

  return <div>
    <p style={{
      color: "var(--micro-style-a-color)"
    }}>React Ant Design Extra</p>

    <code>code</code>

    <del>del</del>

    <mark>mark</mark>

    <ins>ins</ins>

    <kbd>kbd</kbd>

    <a href="https://example.com">Website</a>
  </div>;
}
