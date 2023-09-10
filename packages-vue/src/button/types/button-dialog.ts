import type{
    PropType
} from "vue";
import type {
    IConfirmProps
} from "./common";
import IRcButtonTooltipProps from './button-tooltip';

const IRcButtonDialogProps = {
    ...IRcButtonTooltipProps,
    confirm: {
        type: Object as PropType<IConfirmProps>,
        required: true
    }
};

export default IRcButtonDialogProps;