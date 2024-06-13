import {
  VNode,
  defineComponent,
  unref,
  reactive,
  ref,
  PropType
} from "vue";
import {
  ElDialog
} from "element-plus";

import "./dialog.css";
import provider, {
  TModelAction,
  IModelProps
} from "../../model";

import Footer from "../footer";

export default defineComponent({
  props: {
    params: {
      type: Object as PropType<IModelProps>,
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
      <ElDialog modelValue={unref(state.modelValue)} destroyOnClose={true} closeOnClickModal={false} lock-scroll={true} append-to-body={true} draggable top={"0"}>
        {{
          default: () => (slots.default && slots.default()),
          header: () => (slots.title && slots.title()),
          footer: () => (slots?.footer ? slots.footer() : <Footer /> )
        }}
      </ElDialog>
    </>;
  }
});
