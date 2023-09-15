import type {
    PropType
} from 'vue';

import type {
    IDialogProps,
    IDialogExtendedProps
} from './dialog';

interface IConfirmProps extends IDialogProps {}
interface IConfirmExtendedProps extends IDialogExtendedProps{}

const IRcConfirmProps = {
    /**
     * 文字提示 的配置
     */
    confirm: {
        type: String as PropType<String | IConfirmExtendedProps>,
        required: false
    }
};

export default IRcConfirmProps;

export type {
    IConfirmProps,
    IConfirmExtendedProps
};
