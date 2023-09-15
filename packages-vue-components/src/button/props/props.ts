import type {
    PropType
} from 'vue';

import {
    SPACE,
    MAX_VISIBLE
} from '../../const';
import IRcButtonProps from './button';
import IRcConfirmProps from './confirm';
import IRcTooltipProps from './tooltip';
import {
    IRcOnClickProps
} from './common';
import type {
    IButtonType
} from '../types';

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
     * 这块必须使用 type 类型，不能继承 IButtonProps
     * '|' 是可传入的，根据你传入的位置，作为分隔符
     */
    items: Array as PropType<(IButtonType | '|')[]>,
    type: IRcButtonProps.type,
    size: IRcButtonProps.size,
    disabled: IRcButtonProps.disabled,
    /**
     * 按钮间距
     */
    space: {
        type: Number,
        default: SPACE
    },
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
