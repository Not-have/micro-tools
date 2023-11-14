import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';
import {
    isUndefined as _isUndefined
} from 'lodash-es';

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
    setup(props): () => VNode {
        const handleClick = (evn: MouseEvent) => {
            if(!_isUndefined(props.onClick)) {
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
            {props.label}
        </ElButton>;
    }
});