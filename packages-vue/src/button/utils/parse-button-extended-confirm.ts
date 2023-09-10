import {
    isString as _isString
} from 'lodash-es';

import type {
    IConfirm
} from '../types';

interface IConfirmProps extends Omit<IConfirm, 'onClick'> {}

export default function parseButtonExtendedConfirm(confirm: IConfirmProps, onClick?: Function): IConfirm {
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
        title: confirm?.title || '',
        content: confirm?.content || '',
        ok: confirm?.ok || '确定',
        cancel: confirm?.cancel || '取消',
        byDialog: confirm.byDialog || false,
        onClick: onClick
    };
}