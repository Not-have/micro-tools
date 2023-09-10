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
        onClick,
        ...props
    }): () => VNode {
        const parseConfirm = parseButtonExtendedConfirm(confirm as any, onClick); // 这个 any 很魔性

        const dialong = openDialog(parseConfirm);
        const {
            content,
            ok,
            cancel,
            byDialog
        } = parseConfirm;

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
                                 cancel-button-text={cancel}
                                 onConfirm={(onClick as any)}
            >
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