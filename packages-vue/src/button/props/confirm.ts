import type {
    PropType
} from 'vue';

import type {
    IDialogExtendedProps
} from '../types';

const IRcConfirmProps = {
    /**
     * 文字提示 的配置
     */
    confirm: {
        type: String as PropType<String | IDialogExtendedProps>,
        required: false
    }
};

export default IRcConfirmProps;

