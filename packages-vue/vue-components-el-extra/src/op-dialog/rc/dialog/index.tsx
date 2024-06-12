import {
  VNode,
  defineComponent,
  unref,
  reactive,
  ref,
  PropType,
  h
} from "vue";
import {
  ElDialog
} from "element-plus";

import "./dialog.css";
import provider, {
  TModelAction
} from "../../model";

import Footer from "../footer";
import {
  IPropsExtend
} from "../../type";

interface IDefaultValues extends IPropsExtend<Record<string, unknown>, unknown> {}

export default defineComponent({
  props: {
    params: {
      type: Object as PropType<IDefaultValues>,
      required: true,

      // TODO 多少给个默认值
      default: () => ({
        fieldsValue: {}
      })
    }
  },
  setup({
    params
  }, {
    slots
  }) {

    const state = reactive({
      modelValue: true,
      isEqual: true,
      loading: false,
      value: params?.fieldsValue
    });

    const contentRef = ref(null);

    const dispatch = (arg: TModelAction): void => {

      // @ts-ignore
      state[arg.type] = arg.payload;
    };

    provider({
      props: params,
      state,
      contentRef,
      dispatch
    });

    return (): VNode => <>
      <ElDialog modelValue={unref(state.modelValue)} destroyOnClose={true} closeOnClickModal={false} lockScroll={true}>
        {{
          default: () => h(params?.content),
          header: () => (slots.title && slots.title()),
          footer: () => (slots?.footer ? slots.footer() : <Footer /> )
        }}
      </ElDialog>
    </>;
  }
});
