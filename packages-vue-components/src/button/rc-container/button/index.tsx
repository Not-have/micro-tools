import type {
    VNode
} from 'vue';
import {
    defineComponent,
    provide,
    unref
} from 'vue';

import {
    IButtonProps
} from '../../props';
import {
    Button
} from '../../rc';
import ButtonTooltip from '../button-tooltip';

export default defineComponent({
    props: IButtonProps,
    setup(props): () => VNode {
        console.log(props);
        provide('button_props', props);
        // 具体的组件展示处理
        return (): VNode => {
            if (props.disabledTip || props.tooltip) {
                return <ButtonTooltip />;
            }

            return <Button {...unref(props)} />;
        };
    }
});