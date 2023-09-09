import type {
    PropType,
    VNode
} from 'vue';
import {
    defineComponent,
    unref
} from 'vue';

import {
    ElTooltip,
    Effect
} from "element-plus";
import "./index.css";

import Button from '../rc-button';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'>
        },
        loading: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },
        tooltip: {
            type: String
        },
        disabledTip: {
            type: String
        }
    },
    setup({
        label,
        tooltip,
        ...props
    }): () => VNode {
        return (): VNode => {
            const button = <Button label={label} {...unref(props)} >
                {label}
            </Button>;

            return <ElTooltip content={props.disabled ? props.disabledTip : tooltip}
                              placement="top"
                              effect={Effect.LIGHT}>
                {button}
            </ElTooltip>;
        };
    }
});