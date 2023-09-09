import type{
    PropType
} from "vue";

import type {
    IConfirmProps
} from './common';

import IButtonProps from './button';

const IButtonConfirmProps = {
    ...IButtonProps,
    confirm: {
        type: String as PropType<IConfirmProps | String>,
        required: true
    }
};

export default IButtonConfirmProps;