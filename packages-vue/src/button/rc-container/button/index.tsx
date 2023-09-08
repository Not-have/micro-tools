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
    setup(props): () => JSX.Element {
        return (): JSX.Element => {
            if (props.tooltip) {
                return <ButtonTooltip label={props.label} disabled={props.disabled} loading={props.loading} tooltip={props.tooltip}  />;
            }

            return <Button label={props.label} disabled={props.disabled} loading={props.loading} />;
        };
    }
});