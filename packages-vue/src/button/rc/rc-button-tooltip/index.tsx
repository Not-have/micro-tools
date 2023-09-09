import type {
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
import {
    QuestionFilled
} from '@element-plus/icons-vue';
import "./index.css";

import {
    IButtonTooltipProps
} from '../../types';
import Button from '../rc-button';

export default defineComponent({
    props: IButtonTooltipProps,
    setup({
        label,
        tooltip,
        ...props
    }): () => VNode {
        return (): VNode => {
            const button = <Button label={label} {...unref({
                ...props,
                icon: props.disabled && props.disabledTip ? QuestionFilled : undefined
            })} >
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