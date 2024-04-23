import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';

import {
    ElPopconfirm
} from 'element-plus';

import './index.css';

import type {
    IDialogProps
} from '../../types';
import {
    IRcChildrenProps,
    IRcOnClickProps,
    IRcConfirmProps
} from '../../props';
import {
    parseButtonExtendedConfirm
} from '../../utils';

export default defineComponent({
    props: {
        ...IRcConfirmProps,
        ...IRcOnClickProps,
        ...IRcChildrenProps
    },
    setup({
        confirm,
        onClick,
        children
    }): () => VNode {
        const {
            content,
            ok,
            cancel
        } = parseButtonExtendedConfirm(confirm as IDialogProps, onClick);

        return (): VNode => {
            return <ElPopconfirm title={content}
                                 width="300"
                                 hide-after={0}
                                 hide-icon={true}
                                 confirm-button-text={ok}
                                 cancel-button-text={cancel}
                                 onConfirm={(onClick as any)}
            >
                {{
                    reference: () => (
                        <div class={'micro-button-confirm-box'}>
                            {children}
                        </div>
                    )
                }}
            </ElPopconfirm>;
        };
    }
});