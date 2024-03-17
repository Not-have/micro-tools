import type {
    Component
} from 'vue';
import {
    createApp,
    h,
    ref,
    unref
} from 'vue';
import {
    ElDialog
} from 'element-plus';
import {
    isObject
} from 'micro-util-ts';

import {
    Button
} from '../button';
import {
    OK,
    CANCEL
} from '../intl';

import {
    IProps
} from './type';

export default function opDialog<T extends object>({
    content
}: IProps<T>): void {
    const dialogVisible = ref(true);

    const div = document.createElement('div');
    document.body.appendChild(div);

    const app = createApp({
        // 也可以整个提取出去
        render() {
            return h(ElDialog, {
                modelValue: unref(dialogVisible),
                showClose: true
            }, {
                default: isObject(content) ? h(content) : content,
                footer: [
                    h(Button, { onClick: () => console.log('Button clicked') }, OK),
                    h(Button, { onClick: () => dialogVisible.value = false }, CANCEL)
                ]
            });
        }
    });

    app.mount(div);
}
