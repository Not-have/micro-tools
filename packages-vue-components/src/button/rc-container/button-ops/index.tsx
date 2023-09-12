import {
    defineComponent,
    unref
} from 'vue';

import type {
    IButtonOpsType
} from '../../types';
import {
    IButtonOpsProps
} from '../../props';
import {
    parseButtonOps
} from '../../utils';
import Button from '../button';

export default defineComponent({
    props: IButtonOpsProps,
    setup(props): () => JSX.Element {
        // TODO 对 ts 的类型支持不是很友好
        const [buttonItems, dropdownItems] = parseButtonOps(props as unknown as IButtonOpsType);
        console.log(buttonItems, dropdownItems);
        return (): JSX.Element => {
            return <>
                {
                    buttonItems.map((item) => {
                        console.log(item);
                        if(item === '|') return 1;
                        return <Button {...unref(item)} />;
                    })
                }
            </>;
        };
    }
});