import type {
  Ref,
  VNode
} from 'vue';
import {
  defineComponent,
  ref
} from 'vue';

import {
  inputEmits, 
  inputProps,
  ElInput
} from 'element-plus';

/**
 * 直接在组件里面进行了防抖，优化触发效果
 */
export default defineComponent({
    // @ts-ignore
    props: {
        ...inputProps,
        ...inputEmits
    },
    setup(props): () => VNode {
        console.log(props);
        const input:Ref<string> = ref('');
        return (): VNode => <ElInput v-model={input.value} type={props.type}></ElInput>;
    }
});