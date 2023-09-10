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

import ButtonTooltip from '../button-tooltip';
import "./index.css";

import {
    IRcButtonConfirmProps
} from '../../types';
import openDialog from '../button-dialog';
import {
    parseButtonExtendedConfirm
} from '../../utils';

export default defineComponent({
    props: IRcButtonConfirmProps,
    setup({
        confirm,
        ...props
    }): () => VNode {
        const {
            title,
            content,
            ok,
            cancel,
            byDialog
        } = parseButtonExtendedConfirm(confirm as any); // 这个 any 很魔性
        const dialong = openDialog({
            title,
            content,
            ok,
            cancel,
            byDialog
        });

        return (): VNode => {
            if (byDialog) {
                return <ButtonTooltip {...unref({
                    ...props,
                    onClick: dialong
                })} />;
            }

            return <ElPopconfirm title={content}
                                 width="300"
                                 hide-after={0}
                                 hide-icon={true}
                                 confirm-button-text={ok}
                                 cancel-button-text={cancel}>
                {{
                    reference: () => (
                        <div class={'micro-button-confirm-box'}>
                            <ButtonTooltip {...unref(props)} />
                        </div>
                    )
                }}
            </ElPopconfirm>;
        };
    }
});