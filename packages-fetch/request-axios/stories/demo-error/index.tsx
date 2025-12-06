import React from "react";

import {
  requestClient
} from "../request";

const handleObjClick = (): void => {
  requestClient.get("/api/obj").then(res => {
    // eslint-disable-next-line no-console
    console.log(res);
  }).catch(error => {
    // eslint-disable-next-line no-console
    console.log(error, "error");
  });
};

export default function Index(): React.ReactNode {
  return (
    <div>
      <h1>失败</h1>
      <button onClick={handleObjClick}>对象</button>
    </div>
  );
}
