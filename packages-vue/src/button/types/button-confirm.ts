import IRcButtonTooltipProps from './button-tooltip';

const IRcButtonConfirmProps = {
    ...IRcButtonTooltipProps,
    confirm: {
        type: String,
        required: true
    }
};

export default IRcButtonConfirmProps;