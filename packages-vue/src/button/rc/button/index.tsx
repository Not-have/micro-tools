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
} from "element-plus";

import {
    IRcButtonProps
} from '../../types';

import "./index.css";

export default defineComponent({
    props: IRcButtonProps,
    setup(props): () => VNode {
        const handleClick = () => {
            if(!_isUndefined(props.onClick)) {
                props.onClick();
            }
        };

        return (): VNode => {
            return <ElButton icon={props.icon}
                             type={props.type}
                             loading={props.loading}
                             disabled={props.loading || props.disabled}
                             onClick={handleClick}
            >
                {props.label}
            </ElButton>;
        };
    }
});