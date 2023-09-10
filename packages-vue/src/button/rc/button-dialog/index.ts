
import {
    ElMessageBox
} from "element-plus";
import './index.css';

import type {
    IConfirm
} from '../../types';

export default function dialog (props: IConfirm): () => void {
    return function () {
         ElMessageBox.confirm(
            props.content,
            props.title,
            {
                confirmButtonText: props.ok,
                cancelButtonText: props.cancel
            }
        ).then(res => {
            props.onClick(res);
        }).catch((err => {
            return Promise.reject(err);
        }));
    };
}