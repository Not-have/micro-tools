import type {
    PropType
} from 'vue';

import {
    MAX_VISIBLE
} from '../../const';
import IRcButtonProps from './button';
import IRcConfirmProps from './confirm';
import IRcTooltipProps from './tooltip';
import {
    IRcOnClickProps
} from './common';


export const IButtonProps = {
    ...IRcButtonProps,
    ...IRcConfirmProps,
    ...IRcTooltipProps,
    ...IRcOnClickProps,
    /**
     * 按钮禁止时上方的提示
     */
    disabledTip: IRcTooltipProps.tooltip
};

export const IButtonOpsProps = {
    /**
     * '|' 是可传入的，根据你传入的位置，作为分隔符
     */
    items: Array as PropType<(typeof IButtonProps | '|')[]>,
    type: IRcButtonProps.type,
    size: IRcButtonProps.size,
    disabled: IRcButtonProps.disabled,
    /**
     * 最多可见个数，其余的收起
     */
    maxVisible: {
        type: Number,
        default: MAX_VISIBLE
    },
    /**
     * 额外的组件，放在按钮列表末尾
     */
    extra: Object
};
