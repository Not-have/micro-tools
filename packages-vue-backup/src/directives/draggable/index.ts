import type {
    App,
    DirectiveBinding
} from 'vue';

import {
    draggable
} from 'micro-rc-container';

/**
 * 拖动 directive
 * @param {App} app
 */
export default function directiveDraggable(app: App) {
    app.directive('directiveDraggable', {
        mounted(el: Element, value: DirectiveBinding<boolean | undefined>) {
            draggable(el, value.value);
        }
    });
}
