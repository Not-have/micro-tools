import type {
    VNode
} from 'vue';
import {
    defineComponent,
    unref
} from 'vue';

import {
    ElPopconfirm
} from "element-plus";

import Button from '../rc-button';
import "./index.css";

import {
    IButtonConfirmProps
} from '../../types';

import {
    parseButtonExtendedConfirm
} from '../../utils';

export default defineComponent({
    props: IButtonConfirmProps,
    setup({
        label,
        confirm,
        ...props
    }): () => VNode {
        const {
            content,
            ok,
            cancel,
            byDialog
        } = parseButtonExtendedConfirm(confirm as any); // 这个 any 很魔性

        return (): VNode => {
            return <ElPopconfirm title={content}
                                 width="300"
                                 hide-icon={true}
                                 confirm-button-text={ok}
                                 cancel-button-text={cancel}>
                {{
                    reference: () => (
                        <Button label={label} {...unref(props)} />
                    )
                }}
            </ElPopconfirm>;
        };
    }
});