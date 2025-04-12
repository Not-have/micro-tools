import {
  isObject
} from "lodash-es";

import {
  Location,
  useLocation,
  useNavigate
} from "react-router-dom";

interface INavigateOptions {
  hash?: string;
  search?: string;
}

interface IHistoryHook {
  location: Location;
  push: (url: string | INavigateOptions, options?: INavigateOptions) => void;
  replace: (url: string | INavigateOptions, options?: INavigateOptions) => void;
}

function compoundUrl(url: string, options?: INavigateOptions): string {
  return `${url || ""}${options?.search || ""}${options?.hash || ""}`;
}

export default function useHistory(): IHistoryHook {
  const location = useLocation();

  const navigate = useNavigate();

  const push = (url: string | INavigateOptions, options?: INavigateOptions): void => {
    if (isObject(url)) {
      navigate(compoundUrl(location.pathname, url as INavigateOptions));

      return;
    }

    navigate(`${compoundUrl(url as string, options)}`);
  };

  const replace = (url: string | INavigateOptions, options?: INavigateOptions): void => {
    if (isObject(url)) {
      navigate(compoundUrl(location.pathname, url as INavigateOptions), {
        replace: true
      });

      return;
    }

    navigate(compoundUrl(url as string, options), {
      replace: true
    });
  };

  return {
    location,
    push,
    replace
  };
}
