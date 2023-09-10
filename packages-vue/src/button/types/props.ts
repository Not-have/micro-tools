import type {
    PropType
} from 'vue';

import type {
    IConfirmProps
} from './common';
import IRcButtonProps from './button';
import IRcButtonTooltipProps from './button-tooltip';

export const IButtonProps = {
    ...IRcButtonProps,
    tooltip: IRcButtonTooltipProps.tooltip,
    disabledTip: IRcButtonTooltipProps.disabledTip,
    confirm: Object as PropType<IConfirmProps | String>
};