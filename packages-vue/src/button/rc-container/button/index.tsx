import type {
    VNode
} from 'vue';
import {
    defineComponent,
    unref
} from 'vue';

import {
    IButtonProps
} from '../../types';
import {
    Button,
    ButtonTooltip,
    ButtonConfirm
} from '../../rc';

export default defineComponent({
    props: IButtonProps,
    setup(props): () => VNode {
        return (): VNode => {
            if(props.confirm){
                return <ButtonConfirm {...unref(props)} />;
            }

            if (props.tooltip || (props.disabled && props.disabledTip)) {
                return <ButtonTooltip {...unref(props)} />;
            }

            return <Button {...unref(props)} />;
        };
    }
});