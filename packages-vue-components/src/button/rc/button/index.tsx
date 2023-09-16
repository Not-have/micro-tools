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
import './index.css';

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
        // TODO 事件源类型
        const handleClick = (evn: any) => {
            if(!_isUndefined(props.onClick)) {
                props.onClick();
            }

            let target = evn.target as HTMLElement;

            if(target?.nodeName === 'SPAN'){
                target = evn.target?.parentNode;
            }
            target?.blur();
        };

        return (): VNode => {
            return <ElButton icon={props.icon}
                             type={props.type}
                             size={props.size}
                             loading={props.loading}
                             disabled={props.loading || props.disabled}
                             onClick={handleClick}
            >
                {props.label}
            </ElButton>;
        };
    }
});