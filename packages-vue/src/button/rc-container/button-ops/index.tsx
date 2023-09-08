import {
    defineComponent
} from 'vue';

export default defineComponent({
    props: {},
    setup(): () => JSX.Element {
        return (): JSX.Element => {
            return <>ops</>;
        };
    }
});