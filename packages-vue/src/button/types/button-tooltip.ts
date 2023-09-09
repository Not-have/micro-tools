import IRcButtonProps from './button';

const IRcButtonTooltipProps = {
    ...IRcButtonProps,
    tooltip: {
        type: String
    },
    /**
     * disabled 为 true 时，展示的提示内容
     */
    disabledTip: {
        type: String
    }
};

export default IRcButtonTooltipProps;