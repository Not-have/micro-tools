import type {
    PropType
} from 'vue';
import {
    defineComponent
} from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String as PropType<
                'primary' | 'text' | 'success' | 'warning' | 'danger' | 'info' | 'default'
            >,
            default: 'text'
        }
    },
    setup(props) {
        return () => <div>{props.label}</div>;
    }
});