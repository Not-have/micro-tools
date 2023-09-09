import IButtonProps from './button';

const IButtonTooltipProps = {
    ...IButtonProps,
    tooltip: {
        type: String
    },
    disabledTip: {
        type: String
    }
};

export default IButtonTooltipProps;