import {
    defineComponent
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
    }): () => JSX.Element {
        return (): JSX.Element => {
            if (props.tooltip) {
                return <ButtonTooltip label={label} v-on={{...props}} />;
            }

            return <Button label={label} v-on={{...props}} />;
        };
    }
});