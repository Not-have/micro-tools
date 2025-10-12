import React, {
  useCallback
} from "react";

import {
  useService
} from "../../src";
import {
  testFetch
} from "../fetch";

export default function Index(): React.ReactElement {
  const {
    data,
    loading,
    run
  } = useService(testFetch, undefined, {
    debounce: 1000
  });

  // eslint-disable-next-line no-console
  console.log(data, loading);

  const handleClick = useCallback(() => {
    run();
  }, [
    run
  ]);

  return <div>
    <p>useService</p>
    <button onClick={handleClick}>Fetch Data</button>
  </div>;
}
