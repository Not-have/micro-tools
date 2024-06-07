import {
  defineComponent,
  VNode
} from "vue";
import {
  FormProps,
  ElForm
} from "element-plus";

export default defineComponent({
  name: "Form",
  setup(props: Partial<FormProps>, {
    slots
  }) {
    return (): VNode => (
      <ElForm {...props}>
        {slots.default ? slots.default() : null}
      </ElForm>
    );
  }
});
