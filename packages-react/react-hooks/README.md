# @mt-kit/react-hooks

[![npm version](https://img.shields.io/npm/v/@mt-kit/react-hooks.svg)](https://www.npmjs.com/package/@mt-kit/react-hooks)
[![GitHub](https://img.shields.io/github/stars/Not-have/micro-tools)](https://github.com/Not-have/micro-tools)
[![GitHub issues](https://img.shields.io/github/issues/Not-have/micro-tools)](https://github.com/Not-have/micro-tools/issues)
[![License](https://img.shields.io/github/license/Not-have/micro-tools)](https://github.com/Not-have/micro-tools/blob/main/LICENSE)
[![Documentation](https://img.shields.io/badge/docs-online-blue)](https://not-have.github.io/micro-tools/)
[![Source](https://img.shields.io/badge/source-GitHub-black)](https://github.com/Not-have/micro-tools/tree/main/packages-react/react-hooks)

React Hooks 工具库，提供常用的 React Hooks 实现。

## 下载

```bash
npm i @mt-kit/react-hooks
```

## API

### useIsUnmounted

- 查组件是否已经卸载

- 在某些情况下，当组件卸载后，我们可能会进行一些异步操作，而这些异步操作在组件卸载后执行可能会引发错误，比如更新已卸载组件的状态。使用这个 Hook 可以在异步操作中检查组件是否已卸载，从而避免这些错误

```tsx
import React, {
  useState,
  useEffect
} from "react";

import {
  useIsUnmounted
} from "@mt-kit/react-hooks";
import {
  IResponse,
  testFetch
} from "../fetch";

export default function DemoUseIsUnmounted(): React.ReactElement {
  const [data, setData] = useState<IResponse | null>(null);

  const isUnmounted = useIsUnmounted();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const result = await testFetch();

        // 在更新状态之前检查组件是否已卸载
        if (!isUnmounted()) {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isUnmounted]);

  return <div>
    <p>useIsUnmounted 的使用</p>

    <p>
      useIsUnmounted：
      {JSON.stringify(isUnmounted())}
    </p>

    {data ?
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      :
      <p>Loading...</p>
    }
  </div>;
}
```

### useHistory

- 主要作用是对 react-router-dom 中的 useLocation 和 useNavigate 进行封装，以提供更便捷的路由导航功能

```tsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {
  useHistory
} from "@mt-kit/react-hooks";

// 定义页面组件
function HomePage(): React.ReactElement {
  const {
    push, replace
  } = useHistory();

  const handlePush = () => {

    // 使用 push 方法导航到新页面
    push("/about", {
      search: "?param=value",
      hash: "#section"
    });
  };

  const handleReplace = () => {

    // 使用 replace 方法替换当前页面
    replace({
      search: "?newParam=newValue",
      hash: "#newSection"
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handlePush}>Push to About Page</button>
      <button onClick={handleReplace}>Replace Current Page</button>
    </div>
  );
}

function AboutPage(): React.ReactElement {
  const {
    location
  } = useHistory();

  return <div>
    <h1>About Page</h1>

    <p>
      Current URL:
      {location.pathname + location.search + location.hash}
    </p>
  </div>;
}

export default function App(): React.ReactElement {
  return <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route element={<HomePage />}
        path="/" />

      <Route element={<AboutPage />}
        path="/about" />
    </Routes>
  </Router>;
}
```

### useLocationQuery

- URL 中 search 参数的管理

```tsx
import React, {
  useCallback
} from "react";

import {
  QueryHookResult,
  QueryTypes,
  useLocationQuery
} from "@mt-kit/react-hooks";

// 定义查询参数的类型
interface IQueryParams {
  page: number;
  showDetails: boolean;
}

const types: QueryTypes<IQueryParams> = {
  page: "number",
  showDetails: "boolean"
};

// 或者
/*
const type = {
  page: "number" as const,          // ✅ 正确
  showDetails: "boolean" as const   // ✅ 正确
};
*/

const options = {
  keys: ["page", "showDetails"] as (keyof IQueryParams)[],
  defaults: {
    page: 1,
    showDetails: false
  },
  types,
  replaceMode: false
};

export default function TestUseLocationQuery(): React.ReactElement {

  const arr: QueryHookResult<IQueryParams> = useLocationQuery<IQueryParams>(options);

  const [query, updateQuery] = arr;

  const handlePageChange = useCallback((newPage: number) => {
    updateQuery({
      page: newPage
    });
  }, [updateQuery]);

  const handleShowDetailsChange = useCallback((show: boolean) => {
    updateQuery({
      showDetails: show
    });
  }, [updateQuery]);

  const handleResetClick = useCallback(() => {
    updateQuery(options.defaults);
  }, [updateQuery]);

  return <div>
    <p>useHistory 的使用</p>

    <p>
      Current Page:
      {query.page}
    </p>

    <p>
      Show Details:
      {query.showDetails ? "Yes" : "No"}
    </p>

    <button onClick={() => handlePageChange(2)}>Go to Page 2</button>
    <button onClick={() => handleShowDetailsChange(true)}>Show Details</button>
    <button onClick={() => handleResetClick()}>Show Details Reset</button>
  </div>;
}
```

### useService

- 简化异步操作的管理，尤其是在处理网络请求等异步任务时，能帮助你更好地处理加载状态、数据获取和错误处理，同时还支持防抖功能

```tsx
import React, {
  useCallback
} from "react";

import {
  useService
} from "../../src";
import {
  testFetch,
  IResponse,
  IParams
} from "../fetch";

export default function Index(): React.ReactElement {
  const {
    data,
    loading,
    run
  } = useService<IParams, IResponse>(testFetch, {
    id: "123"
  }, {
    debounce: 2000
  });

  // eslint-disable-next-line no-console
  console.log(data, loading);

  const handleClick = useCallback(() => {
    run({
      id: "456"
    });
  }, [
    run
  ]);

  return <div>
    <p>useService</p>
    <button onClick={handleClick}>Fetch Data</button>
  </div>;
}
```

#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| fetch | (query?: Q) => Promise<D \| null> | 是 | - | 请求函数 |
| query | Q | 否 | - | 请求参数，可以是数组，也可以是对象，数组时，会依次传入请求函数，对象时，会传入请求函数 |
| config | Object | 否 | - | debounce: 是否防抖，或指定防抖的时间（ms），immediate: 是否立即执行，initData: 初始数据，error: 错误处理，请求错误时的处理函数 |

#### 返回值

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| data | D | 否 | - | 请求数据 |
| loading | boolean | 否 | - | 请求状态 |
| run | (query?: Q) => Promise<D \| null> | 否 | - | 请求函数 |

### useSafeState

- 安全的 useState，在组件卸载后不会更新状态

```tsx
import React, {
  useCallback
} from "react";

import {
  useSafeState
} from "@mt-kit/react-hooks";

export default function DemoUseSafeState(): React.ReactElement {
  const [data, setData] = useSafeState<IResponse | null>(null);

  return <div>
    <p>useSafeState</p>
    <button onClick={() => setData(null)}>Set Data</button>
  </div>;
}
```

#### 参数

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| initialState | S | 是 | - | 初始状态 |

#### 返回值

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| data | S | 否 | - | 状态 |
| setData | (value: SetStateAction&lt;S&gt;) => void | 否 | - | 设置状态的函数 |

<details>

<summary> deprecated API </summary>

### <del> useAsync </del>

- 数据请求

- 简化异步操作的管理，尤其是在处理网络请求等异步任务时，能帮助你更好地处理加载状态、数据获取和错误处理，同时还支持防抖功能

```tsx
import React, {
  useCallback
} from "react";

import {
  useAsync
} from "@mt-kit/react-hooks";
import {
  testFetch
} from "../fetch";

export default function DemoUseAsync(): React.ReactElement {
  const {
    run,
    runWithDebounce,
    loading,
    data
  } = useAsync(testFetch, null, {
    debounce: 500 // 启用防抖，延迟 500 毫秒
  });

  const handleClick = useCallback((): void => {
    run();
  }, [run]);

  const handleDebouncedClick = useCallback((): void => {
    if (runWithDebounce) {
      runWithDebounce();
    }
  }, [runWithDebounce]);

  return <div>
    <p>useIsUnmounted 的使用</p>

    <button
      disabled={loading}
      onClick={handleClick}>
      {loading ? "Loading..." : "Fetch Data"}
    </button>

    <button
      disabled={loading}
      onClick={handleDebouncedClick}>
      {loading ? "Loading..." : "Fetch Data (Debounced)"}
    </button>

    {data && <pre>
      {JSON.stringify(data, null, 2)}
    </pre>}
  </div>;
}
```

</details>
