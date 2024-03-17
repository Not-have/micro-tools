import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';

import {
    isUndefined as _isUndefined,
    throttle
} from 'micro-util-ts';

import {
    ElButton
} from 'element-plus';

import {
    IRcButtonProps,
    IRcOnClickProps
} from '../../props';

export default defineComponent({
    props: {
        ...IRcButtonProps,
        ...IRcOnClickProps
    },
    setup(props, { slots }): () => VNode {
        const handleClick = (evn: MouseEvent) => {
            if (!_isUndefined(props.onClick) && props.isThrottle) {
                // 进行了节流的处理，防止用户多次一直点击
                throttle(props?.onClick as Function)(evn);
                return;
            }

            if(!_isUndefined(props.onClick)) {
                // 进行了节流的处理，防止用户多次一直点击
                props.onClick(evn);
            }
        };

        return (): VNode => <ElButton
            icon={props.icon}
            type={props.type}
            size={props.size}
            loading={props.loading}
            disabled={props.loading || props.disabled}
            onClick={handleClick}
        >
            {props.label || slots.default && slots.default() }
        </ElButton>;
    }
});