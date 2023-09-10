import type {
    VNode
} from 'vue';
import {
    defineComponent,
    unref
} from 'vue';
import {
    isUndefined as _isUndefined
} from 'lodash-es';

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
        // 具体的组件展示处理
        return (): VNode => {
            const disabled= props.disabled;
            
            if (disabled && _isUndefined(props.disabledTip)) {
                return <Button {...unref(props)} />;
            }

            if(disabled && props.disabledTip){
                return <ButtonTooltip {...unref(props)} />;
            }

            if (props.confirm && !disabled) {
                return <ButtonConfirm {...unref(props)} />;
            }

            return <Button {...unref(props)} />;
        };
    }
});