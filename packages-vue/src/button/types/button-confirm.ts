import type{
    PropType
} from "vue";

import type {
    IConfirmProps
} from './common';

import IRcButtonTooltipProps from './button-tooltip';

const IRcButtonConfirmProps = {
    ...IRcButtonTooltipProps,
    confirm: {
        type: String as PropType<IConfirmProps | String>,
        required: true
    }
};

export default IRcButtonConfirmProps;