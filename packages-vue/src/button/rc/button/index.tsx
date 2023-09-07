import {
    defineComponent
} from 'vue';

import {
    ElButton,
    ElTooltip,
    Effect
} from "element-plus";

export default defineComponent({
    props: {
        label: {
            type: String
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
    setup(props) {
        return () => {
            if (props.tooltip) {
                return <ElTooltip content={props.tooltip}
                                  placement="top"
                                  effect={Effect.LIGHT}>
                    <ElButton loading={props.loading}
                              disabled={props.loading || props.disabled}>
                        {/* 禁用前展示 icon */}
                        {props.label}
                    </ElButton>
                </ElTooltip>;
            }
            return <ElButton loading={props.loading}
                             disabled={props.loading || props.disabled}>
                {props.label}
            </ElButton>;
        };
    }
});