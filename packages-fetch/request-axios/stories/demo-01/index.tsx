import React from "react";

import {
  requestClient
} from "../request";

requestClient.get("/api/403").then(res => {
  // eslint-disable-next-line no-console
  console.log(res);
});

requestClient.get("/api/list").then(res => {
  // eslint-disable-next-line no-console
  console.log(res);
});

requestClient.get("/api/obj").then(res => {
  // eslint-disable-next-line no-console
  console.log(res);
});

export default function Index(): React.Element {
  return (
    <div>
      <h1>Demo01</h1>
      <p>这是一个演示页面</p>
    </div>
  );
}
