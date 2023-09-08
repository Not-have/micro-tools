import type {
    PropType
} from 'vue';
import {
    defineComponent
} from 'vue';

import {
    ElButton
} from "element-plus";
import {
    QuestionFilled
} from '@element-plus/icons-vue';

import "./index.css";

export default defineComponent({
    // TODO 这块很垃圾，没办法提出去，所以下面的组件都没办拆分
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String as PropType<'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text' | undefined>,
            default: undefined
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
            return <ElButton icon={props.disabled ? QuestionFilled : undefined}
                             type={props.type}
                             loading={props.loading}
                             disabled={props.loading || props.disabled}>
                {props.label}
            </ElButton>;
        };
    }
});