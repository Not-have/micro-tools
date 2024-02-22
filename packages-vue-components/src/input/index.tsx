import type {
    VNode
} from 'vue';
import {
    defineComponent
} from 'vue';

import {
    ElInput
} from 'element-plus';
import {
    debounce
} from 'micro-util-ts';
/**
 * 新增了 isDebounce
 *
 * @deprecated onInput，直接使用 onChange
 */
export default defineComponent({
    props: {
        /**
         * 在 Input 值改变时触发
         */
        onChange: {
            type: Function
        },
        /**
         * 是否开启防抖
         */
        isDebounce: {
            type: Boolean,
            default: false
            
        }
    },
    setup(props): () => VNode {
        const handleInput = function(value: unknown){
            if (props.isDebounce) {
                debounce(props?.onChange as Function)(value);
                return;
            }

            if(props.onChange) {
                props?.onChange(value);
            }
        };

        return (): VNode => <ElInput  v-bind="$attrs" onInput={handleInput}></ElInput>;
    }
});