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
} from '../../props';
import {
    Button
} from '../../rc';
import {
    createContext
} from '../../hook';
import ButtonConfirm from '../button-confirm';
import ButtonTooltip from '../button-tooltip';

export default defineComponent({
    props: IButtonProps,
    setup(props, { slots }): () => VNode {
        createContext('button_props', props);
        // 具体的组件展示处理
        return (): VNode => {
            if (!_isUndefined(props.confirm)) {
                return <ButtonConfirm/>;
            }
            if (props.disabledTip || props.tooltip) {
                return <ButtonTooltip/>;
            }

            return <Button {...unref(props)}>
                { slots?.default && slots.default() }
            </Button>;
        };
    }
});