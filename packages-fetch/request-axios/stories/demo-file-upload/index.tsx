import React from "react";

import {
  requestClient
} from "../request";

export default function Index(): React.ReactNode {
  const handleUploadClick = () => {
    requestClient.upload("/api/file-upload", {
      file: new File([], "test.txt")
    });
  };

  return (
    <div>
      <h1>DemoFileUpload</h1>

      <button onClick={handleUploadClick}>上传</button>
    </div>
  );
}
