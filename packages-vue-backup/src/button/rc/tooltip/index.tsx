import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';

import {
    ElTooltip,
    Effect
} from 'element-plus';
import './index.css';

import {
    IRcTooltipProps,
    IRcChildrenProps
} from '../../props';

export default defineComponent({
    props: {
        ...IRcTooltipProps,
        ...IRcChildrenProps
    },
    setup({
        tooltip,
        children
    }): () => VNode {
        return (): VNode => {
            return <ElTooltip content={tooltip}
                              placement="top"
                              effect={Effect.LIGHT}>
                {children}
            </ElTooltip>;
        };
    }
});