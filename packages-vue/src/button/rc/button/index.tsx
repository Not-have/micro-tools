import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';

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
        return (): VNode => {
            return <ElButton icon={props.icon}
                             type={props.type}
                             loading={props.loading}
                             disabled={props.loading || props.disabled}
            >
                {props.label}
            </ElButton>;
        };
    }
});