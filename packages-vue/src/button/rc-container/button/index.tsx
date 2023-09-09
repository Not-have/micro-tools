import type {
    VNode
} from 'vue';
import {
    defineComponent,
    unref
} from 'vue';

import {
    Button,
    ButtonTooltip
} from '../../rc';

export default defineComponent({
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
        },
        /**
         * disabled 为 true 时，展示的提示内容
         */
        disabledTip: {
            type: String
        }
    },
    setup({
        label,
        ...props
    }): () => VNode {
        return (): VNode => {
            if (props.tooltip || props.disabledTip) {
                return <ButtonTooltip label={label} {...unref(props)} />;
            }

            return <Button label={label} {...unref(props)} />;
        };
    }
});