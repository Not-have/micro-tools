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
    }): () => JSX.Element {
        const [buttonItems, dropdownItems] = parseButtonOps(props as unknown as IButtonOpsType);
        const buttonDropdownItems = dropdownItems.map(v => {
            return <Button {...unref(v)} />;
        });
        return (): JSX.Element => {
            return <div class="button-ops">
                {
                    buttonItems.map((v) => {
                        if (v === '|') {
                            return <span class={'separation-line'} style={`margin:${space}px`}>|</span>;
                        }
                        return <Button {...unref(v)} />;
                    })
                }
                {extra}
                {
                    _isEmpty(dropdownItems) ? <>11</> : <DropdownMenu {...{
                        extra,
                        items: buttonDropdownItems
                    }} />
                }

            </div>;
        };
    }
});