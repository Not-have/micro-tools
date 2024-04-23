import type { Ref } from 'vue';
import { ref, watch, unref } from 'vue';
import {
    throttle,
    debounce
} from 'micro-util-ts';
import type {
    TEventName
} from 'micro-ts-types';

interface IUseEventParams {
    el?: Element | Ref<Element | undefined> | Window | any;
    name: TEventName;
    func: EventListener;
    options?: boolean | AddEventListenerOptions;
    autoRemove?: boolean;
    isDebounce?: boolean;
    wait?: number;
}

/**
 * 监听事件
 * @param {any} el 事件绑定的元素，默认为 window
 * @param {string} name 事件名称
 * @param {EventListener} func 事件处理函数
 * @param {boolean | AddEventListenerOptions | undefined} options 事件监听的配置项，如 passive、capture 等
 * @param {boolean | undefined} autoRemove 是否自动移除事件监听，默认为 true
 * @param {boolean | undefined} isDebounce 是否使用防抖函数，默认为 true
 * @param {number | undefined} wait  防抖/节流的等待时间，默认为 80 毫秒
 * @return {{removeEvent: () => void}} 返回 removeEvent 函数，用于外部手动移除事件监听
 */
export default function useEventListener({
    el = window,
    name,
    func,
    options,
    autoRemove = true,
    isDebounce = true,
    wait = 80
}: IUseEventParams): { removeEvent: () => void } {
    let remove = () => {
    }; // 初始化移除事件监听的函数，初始值为空函数
    const isAddRef = ref(false);

    if (el) { // 判断 el 是否存在
        const element = ref(el as Element) as Ref<Element>; // 将 el 转换为 Ref 对象

        const handler = isDebounce ? debounce(func, wait) : throttle(func, wait);
        const realHandler = wait ? handler : func; // 如果设置了等待时间，则使用处理函数，否则直接使用原始监听函数
        const removeEventListener = (e: Element) => {
            isAddRef.value = true;
            e.removeEventListener(name, realHandler, options);
        };
        const addEventListener = (e: Element) => e.addEventListener(name, realHandler, options);

        const removeWatch = watch(
            element,
            (v, _ov, cleanUp) => {
                if (v) {
                    !unref(isAddRef) && addEventListener(v);
                    cleanUp(() => {
                        autoRemove && removeEventListener(v);
                    });
                }
            },
            {immediate: true}
        );

        remove = () => {
            removeEventListener(element.value);
            removeWatch();
        };
    }
    return {removeEvent: remove};
}
