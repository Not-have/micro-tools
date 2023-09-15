import {
    compact as _compact
} from 'lodash-es';
import {
    LINE
} from '../../const';
import type {
    IButtonType,
    IButtonOpsType
} from '../types';

type ButtonOpsResult = [(IButtonType | typeof LINE)[], (IButtonType)[]];

export default function parseButtonOps(props: IButtonOpsType): ButtonOpsResult {
    const {
        disabled,
        maxVisible,
        size,
        type,
        items
    } = props;

    const parseItems = items.map(item => {
        if(item === LINE){
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
        if(v !== LINE){
            return v;
        }
    });

    return [buttonItems, _compact(dropdownItems)];
}
