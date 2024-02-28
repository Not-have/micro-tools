import {
    Location,
    useLocation,
    useNavigate
} from 'react-router-dom';
import {
    isObject
} from 'micro-util-ts';

type NavigateOptions = {
    hash?: string;
    search?: string;
};

type HistoryHook = {
    location: Location;
    push: (url: string | NavigateOptions, options?: NavigateOptions) => void;
    replace: (url: string | NavigateOptions, options?: NavigateOptions) => void;
};

function compoundUrl(url: string, options?: NavigateOptions): string {
    return `${url || ''}${options?.search || ''}${options?.hash || ''}`;
}

export default function useHistory(): HistoryHook {
    const location = useLocation();
    const navigate = useNavigate();

    const push = (url: string | NavigateOptions, options: NavigateOptions | undefined) => {
        if (isObject(url)) {
            navigate(compoundUrl(location.pathname, url as NavigateOptions));
            return;
        }
        navigate(`${compoundUrl(url as string, options)}`);
    };

    const replace = (url: string | NavigateOptions, options: NavigateOptions | undefined) => {
        if (isObject(url)) {
            navigate(compoundUrl(location.pathname, url as NavigateOptions), { replace: true });
            return;
        }
        navigate(compoundUrl(url as string, options), { replace: true });
    };

    return {
        location,
        push,
        replace
    };
}
