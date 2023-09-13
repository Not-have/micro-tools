import {
    isString as _isString
} from 'lodash-es';
import {
    OK,
    CANCEL
} from '../../intl';

import type {
    IConfirmProps,
    IConfirmExtendedProps
} from '../props';

export default function parseButtonExtendedConfirm(confirm: IConfirmProps, onClick?: Function): IConfirmExtendedProps {
    if (_isString(confirm)) {
        return {
            content: confirm,
            ok: OK,
            cancel: CANCEL,
            byDialog: false
        };
    }

    return {
        content: confirm?.content || '',
        ok: confirm?.ok || OK,
        cancel: confirm?.cancel || CANCEL,
        byDialog: confirm.byDialog || false,
        onClick: onClick
    };
}