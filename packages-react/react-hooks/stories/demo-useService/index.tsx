import React, {
  useCallback
} from "react";

import {
  useService
} from "../../src";
import {
  testFetch,
  IResponse
} from "../fetch";

export default function Index(): React.ReactElement {
  const {
    data,
    loading,
    run
  } = useService<[string, string], IResponse>(testFetch, [
    "123",
    "v1.0"
  ], {
    debounce: 2000
  });

  // eslint-disable-next-line no-console
  console.log(data, loading);

  const handleClick = useCallback(() => {
    run("456", "v2.0");
  }, [
    run
  ]);

  return <div>
    <p>useService</p>
    <button onClick={handleClick}>Fetch Data</button>
    <hr />
    {data?.content}
    {loading ? "loading" : "not loading"}
    {data?.title}
    {data?.author}
    {data?.url}
    <hr />

    <code>
      {JSON.stringify(data, null, 2)}
    </code>
  </div>;
}
