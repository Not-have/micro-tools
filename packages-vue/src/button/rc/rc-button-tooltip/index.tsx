import type {
    PropType
} from 'vue';
import {
    defineComponent
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
            type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text' | undefined>,
            default: undefined
        },
        tooltip: {
            type: String
        },
        loading: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    setup(props): () => JSX.Element {
        return (): JSX.Element => {
            const button = <Button label={props.label}
                                   type={props.type}
                                   loading={props.loading}
                                   disabled={props.disabled}>
                {props.label}
            </Button>;

            return <ElTooltip content={props.tooltip}
                              placement="top"
                              effect={Effect.LIGHT}>
                {button}
            </ElTooltip>;
        };
    }
});