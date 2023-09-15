import {
    compact as _compact
} from 'lodash-es';
import type {
    IButtonType,
    IButtonOpsType
} from '../types';

type ButtonOpsResult = [(IButtonType | '|')[], (IButtonType)[]];

export default function parseButtonOps(props: IButtonOpsType): ButtonOpsResult {
    const {
        disabled,
        maxVisible,
        size,
        type,
        items
    } = props;

    const parseItems = items.map(item => {
        if(item === '|'){
            return item;
        }

        return {
            disabled,
            size,
            type,
            ...item
        };
    });

    const buttonItems = parseItems.slice(0, maxVisible);
    const dropdownItems = parseItems.slice(maxVisible).map(v => {
        if(v !== '|'){
            return v;
        }
    });

    return [buttonItems, _compact(dropdownItems)];
}
