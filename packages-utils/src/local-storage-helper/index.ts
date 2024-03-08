interface IParams<T> {
    /**
     * 定义 localStorage 的 key
     */
    key: string,
    /**
     * 定义 localStorage 的 value
     */
    value: T,
    /**
     * 定义 localStorage 的储存时间
     * 1 = 24h、0.5 = 12h
     */
    expire?: number
}

/**
 * localStorage 的一些扩展
 */
export default class LocalStorageHelper {
    // private static readonly storageKeyPrefix = 'test';
    /**
     * 设置 localStorage
     * @param {IParams} param0 
     */
    static set<T extends any>({
        key,
        value,
        expire
    }: IParams<T>) {
        if (key === '' || key === null || key === undefined) {
            throw new Error('key 不能为空');
        }
        if (value === '' || value === null || value === undefined) {
            throw new Error('value 不能为空');
        }

        localStorage.setItem(key, JSON.stringify({
            value: value,
            expire: expire ? new Date().getTime() + expire * 24 * 60 * 60 * 1000 : null
        }));
    }

    static get<T>(key: string): T | null {
        const storedItem = localStorage.getItem(key);

        if (storedItem) {
            const parsedItem = JSON.parse(storedItem);

            if (parsedItem?.expire) {
                const now = Date.now();

                if(parsedItem.expire === Infinity || parsedItem.expire > now) {
                    return parsedItem.value;
                } else {
                    localStorage.removeItem(key);
                    
                    return null;
                }
            }

            delete parsedItem.expire; 
            
            return parsedItem;
        }
       return null;
    }

    static delete(key: string) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }
}