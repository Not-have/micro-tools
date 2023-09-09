import IRcButtonProps from './button';
import IRcButtonTooltipProps from './button-tooltip';
import IRcButtonConfirmProps from './button-confirm';

export const IButtonProps = {
    ...IRcButtonProps,
    tooltip: IRcButtonTooltipProps.tooltip,
    disabledTip: IRcButtonTooltipProps.disabledTip,
    confirm: IRcButtonConfirmProps.confirm
};