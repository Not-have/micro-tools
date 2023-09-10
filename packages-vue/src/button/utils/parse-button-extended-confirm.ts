import {
    isString as _isString
} from 'lodash-es';

import type {
    IConfirmProps
} from '../types';

export default function parseButtonExtendedConfirm(confirm: IConfirmProps): Required<IConfirmProps> {
    if (_isString(confirm)) {
        return {
            title: '',
            content: confirm,
            ok: '确定',
            cancel: '取消',
            byDialog: false
        };
    }

    return {
        title: confirm?.title ?? '提示',
        content: confirm.content,
        ok: confirm?.ok ?? '确定',
        cancel:confirm?.cancel ??  '取消',
        byDialog: confirm?.byDialog
    };
}