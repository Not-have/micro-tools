import {defineComponent, ref} from 'vue';
import {
    ElButton
} from "@element-plus/components";

const a = ref<number>(1);

export default defineComponent({
    render(){
        return <ElButton type={'success'}>{a.value}</ElButton>;
    }
});