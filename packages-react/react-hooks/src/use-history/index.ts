import {
  isObject
} from "lodash-es";
// eslint-disable-next-line sort-imports
import {
  Location,
  useLocation,
  useNavigate
} from "react-router-dom";

type TNavigateOptions = {
  hash?: string;
  search?: string;
};

type THistoryHook = {
  location: Location;
  push: (url: string | TNavigateOptions, options?: TNavigateOptions) => void;
  replace: (url: string | TNavigateOptions, options?: TNavigateOptions) => void;
};

function compoundUrl(url: string, options?: TNavigateOptions): string {
  return `${url || ""}${options?.search || ""}${options?.hash || ""}`;
}

export default function useHistory(): THistoryHook {
  const location = useLocation();

  const navigate = useNavigate();

  const push = (url: string | TNavigateOptions, options?: TNavigateOptions) => {
    if (isObject(url)) {
      navigate(compoundUrl(location.pathname, url as TNavigateOptions));

      return;
    }

    navigate(`${compoundUrl(url as string, options)}`);
  };

  const replace = (url: string | TNavigateOptions, options?: TNavigateOptions) => {
    if (isObject(url)) {
      navigate(compoundUrl(location.pathname, url as TNavigateOptions), {
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
