import type { VNode } from 'vue';
import {
    unref,
    defineComponent
} from 'vue';
import './index.css';
import {
    isEmpty as _isEmpty
} from 'lodash-es';

import type {
    IButtonOpsType
} from '../../types';
import {
    LINE
} from '../../../const';
import {
    IButtonOpsProps
} from '../../props';
import {
    parseButtonOps
} from '../../utils';
import Button from '../button';
import {
    DropdownMenu
} from '../../rc';

export default defineComponent({
    props: IButtonOpsProps,
    setup({
        extra,
        space,
        ...props
    }): () => VNode {
        const [buttonItems, dropdownItems] = parseButtonOps(props as unknown as IButtonOpsType);
        const buttonDropdownItems = dropdownItems.map(v => {
            return <Button {...unref(v)} />;
        });
        return (): VNode => {
            return <div class="button-ops">
                {
                    buttonItems.map((v) => {
                        if (v === LINE) {
                            return <span class='separation-line' style={`margin:${space}px`}>{LINE}</span>;
                        }
                        return <Button {...unref(v)} />;
                    })
                }
                {extra}
                {
                    _isEmpty(dropdownItems) ? undefined : <DropdownMenu {...{
                        extra,
                        items: buttonDropdownItems
                    }} />
                }

            </div>;
        };
    }
});