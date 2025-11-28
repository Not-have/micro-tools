import React from "react";

import {
  requestClient
} from "../request";

// requestClient.get("/api/401").then(res => {
//   // eslint-disable-next-line no-console
//   console.log(res);
// });

const handleListClick = (): void => {
  requestClient.get("/api/list").then(res => {
    // eslint-disable-next-line no-console
    console.log(res);
  });
};

export default function Index(): React.ReactNode {
  return (
    <div>
      <h1>成功</h1>
      <button onClick={handleListClick}>列表</button>
    </div>
  );
}
