import type {
    PropType
} from 'vue';

import type {
    IDialogProps,
    IDialogExtendedProps
} from './dialog';

interface IConfirmProps extends IDialogProps {}
interface IConfirmExtendedProps extends Omit<IDialogExtendedProps, 'title'>{}

const IRcConfirmProps = {
    /**
     * 文字提示 的配置
     */
    confirm: {
        type: String as PropType<String | IDialogExtendedProps>
    }
};

export default IRcConfirmProps;

export type {
    IConfirmProps,
    IConfirmExtendedProps
};