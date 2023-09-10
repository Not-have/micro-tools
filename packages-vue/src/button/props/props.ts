import type {
    PropType
} from 'vue';

import type {
    IConfirmType
} from '../types';
import IRcButtonProps from './button';
import IRcButtonTooltipProps from './button-tooltip';

export const IButtonProps = {
    ...IRcButtonProps,
    tooltip: IRcButtonTooltipProps.tooltip,
    disabledTip: IRcButtonTooltipProps.disabledTip,
    confirm: Object as PropType<IConfirmType | String>
};

export const IButtonOpsProps = {
    items: Array as PropType<typeof IButtonProps[]>,
    type: IRcButtonProps.type,
    size: IRcButtonProps.size,
    disabled: IRcButtonProps.disabled,
    /**
     * 最多可见个数，其余的收起
     */
    maxVisible: Number,
    /**
     * 额外的组件，放在按钮列表末尾
     */
    extra: Object
};
