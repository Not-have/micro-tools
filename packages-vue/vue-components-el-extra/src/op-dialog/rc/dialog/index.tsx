import {
  VNode,
  defineComponent,
  unref,
  reactive
} from "vue";
import {
  ElDialog
} from "element-plus";

import {
  defaultValues
} from "../../const";
import provider, {
  IModelProps,
  TModelAction
} from "../../model";

import Footer from "../footer";

export default defineComponent({
  props: defaultValues,
  setup({
    fieldsValue,
    ...rest
  }: IModelProps, {
    slots
  }) {
    const state = reactive({
      modelValue: true,
      isEqual: true,
      loading: false,
      value: fieldsValue
    });

    const dispatch = (arg: TModelAction): void => {

      // @ts-ignore
      state[arg.type] = arg.payload;
    };

    provider({
      props: {
        ...rest,
        fieldsValue
      },
      state,
      dispatch
    });

    return (): VNode => <>
      <ElDialog modelValue={unref(state.modelValue)} destroyOnClose={true} closeOnClickModal={false}>
        {{
          default: () => (slots.default && slots.default()),
          header: () => (slots.title && slots.title()),
          footer: () => (slots?.footer ? slots.footer() : <Footer /> )
        }}
      </ElDialog>
    </>;
  }
});
