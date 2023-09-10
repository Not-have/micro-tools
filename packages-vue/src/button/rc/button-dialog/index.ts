
import {
    ElMessageBox
} from "element-plus";
import './index.css';

import type {
    IConfirmProps
} from '../../types';

export default function dialog (props: IConfirmProps): () => void {
    return function () {
         ElMessageBox.confirm(
            props.content,
            props.title,
            {
                confirmButtonText: props.ok,
                cancelButtonText: props.cancel
            }
        ).then(res => {
            return Promise.resolve(res);
        }).catch((err => {
            return Promise.reject(err);
        }));
    };
}