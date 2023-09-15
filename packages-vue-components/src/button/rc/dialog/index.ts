import {
    isUndefined as _isUndefined
} from 'lodash-es';
import {
    ElMessageBox
} from 'element-plus';
import './index.css';

import type {
    IDialogExtendedProps
} from '../../types';

export default function dialog (props: IDialogExtendedProps): () => void {
    return function () {
         ElMessageBox.confirm(
            props.content,
            props.title,
            {
                confirmButtonText: props.ok,
                cancelButtonText: props.cancel
            }
        ).then(res => {
            if(!_isUndefined(props.onClick)){
                props.onClick(res);
            }
        }).catch((err => {
             console.error(err);
        }));
    };
}