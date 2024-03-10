import type { EChartsOption } from 'echarts';
import type { Ref } from 'vue';
import {
    unref,
    nextTick,
    watch,
    computed,
    ref,
    onUnmounted
} from 'vue';

import {
    debounce
} from 'micro-util-ts';

import {
    Fn
} from '../types';
import {
    echarts,
    timeoutFn
} from '../utils';
import {
    useEventListener
} from '../../hooks';

export default function useECharts(
    elRef: Ref<HTMLDivElement>,
    theme: 'light' | 'dark' | 'default' = 'default'
) {
    /**
     * 主题监听，因为有可能全局修改了主题颜色
     */
    const getDarkMode = computed(() => {
        return theme;
    });
    const cacheOptions = ref({}) as Ref<EChartsOption>;
    const getOptions = computed(() => {
        if (getDarkMode.value !== 'dark') {
            return cacheOptions.value as EChartsOption;
        }
        return {
            backgroundColor: 'transparent',
            ...cacheOptions.value
        } as EChartsOption;
    });

    let chartInstance: echarts.ECharts | null = null;
    let resizeFn: Fn = resize;
    let removeResizeFn: Fn = () => {}; // 删除窗口监听

    resizeFn = debounce(resize, 200);

    /**
     * 初始化 echarts
     */
    function initCharts(t = theme) {
        const el = unref(elRef);
        if (!el || !unref(el)) {
            return;
        }

        chartInstance = echarts.init(el, t);

        // 监听窗口变化
        const { removeEvent } = useEventListener({
            name: 'resize',
            func: resizeFn
        });

        removeResizeFn = removeEvent;

        if (el.offsetHeight === 0) {
            timeoutFn(() => {
                resizeFn();
            });
        }
    }

    /**
     * 设置属性
     * clear 为 true 时修改数据
     */
    function setOptions(options: EChartsOption, clear = true) {
        cacheOptions.value = options;
        return new Promise(resolve => {
            if (unref(elRef)?.offsetHeight === 0) {
                timeoutFn(() => {
                    setOptions(unref(getOptions));
                    resolve(null);
                });
            }
            nextTick(() => {
                timeoutFn(() => {
                    if (!chartInstance) {
                        initCharts(getDarkMode.value as 'default');

                        if (!chartInstance) return;
                    }
                    clear && chartInstance?.clear();
                    chartInstance?.setOption(unref(getOptions));
                    resolve(null);
                });
            });
        });
    }

    /**
     * 大小改变
     */
    function resize() {
        chartInstance?.resize({
            animation: {
                duration: 300,
                easing: 'quadraticIn'
            }
        });
    }

    /**
     * 监听主题变化
     */
    watch(
        () => getDarkMode.value,
        theme => {
            if (chartInstance) {
                chartInstance.dispose();
                initCharts(theme as 'default');
                setOptions(cacheOptions.value);
            }
        }
    );

    onUnmounted(() => {
        if (!chartInstance) return;
        removeResizeFn();
        chartInstance.dispose();
        chartInstance = null;
    });

    function getInstance(): echarts.ECharts | null {
        if (!chartInstance) {
            initCharts(getDarkMode.value as 'default');
        }
        return chartInstance;
    }

    return {
        setOptions,
        resize,
        echarts,
        getInstance
    };
}
