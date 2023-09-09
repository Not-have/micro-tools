import {
    isString as _isString
} from 'lodash-es';

import type {
    IConfirmProps
} from '../types';

export default function parseButtonExtendedConfirm(confirm: IConfirmProps): IConfirmProps {
    if (_isString(confirm)) {
        return {
            content: confirm,
            ok: '确定',
            cancel: '取消',
            byDialog: false
        };
    }

    return {
        ...confirm
    };
}