import {
    defineComponent
} from 'vue';

import {
    ElButton,
    ElTooltip,
    Effect
} from "element-plus";
import {QuestionFilled} from '@element-plus/icons-vue';

import "./index.css";

export default defineComponent({
    // TODO 这块很垃圾，没办法提出去，所以下面的组件都没办拆分
    props: {
        label: {
            type: String,
            required: true
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
            const button = <ElButton icon={props.disabled ? QuestionFilled : undefined} loading={props.loading}
                                     disabled={props.loading || props.disabled}>
                {props.label}
            </ElButton>;

            if (props.tooltip) {
                return <ElTooltip content={props.tooltip}
                                  placement="top"
                                  effect={Effect.LIGHT}>
                    {button}
                </ElTooltip>;
            }

            return button;
        };
    }
});