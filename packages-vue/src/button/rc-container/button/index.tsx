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
        }
    },
    setup({
        label,
        ...props
    }): () => VNode {
        return (): VNode => {
            if (props.tooltip) {
                return <ButtonTooltip label={label} {...unref(props)} />;
            }

            return <Button label={label} {...unref(props)} />;
        };
    }
});