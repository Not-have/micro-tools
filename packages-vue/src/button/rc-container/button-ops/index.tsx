import {
    defineComponent
} from 'vue';

import {
    IButtonOpsProps
} from '../../props';

export default defineComponent({
    props: IButtonOpsProps,
    setup(): () => JSX.Element {
        return (): JSX.Element => {
            return <>ops</>;
        };
    }
});