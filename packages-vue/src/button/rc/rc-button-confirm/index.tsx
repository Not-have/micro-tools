import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';

export default defineComponent({
    props: {},
    setup(): () => VNode {
        return (): VNode => {
            return <div title="Are you sure to delete this?">
                aaaaaaa
            </div>;
        };
    }
});