import {
  defineComponent,
  unref,
  VNode,
  reactive,
  ref
} from "vue";
import {
  ElDrawer
} from "element-plus";
import "./drawer.css";

import {
  defaultValues
} from "../../const";
import {
  drawerDirection
} from "../../utils";

import provider, {
  IModelProps,
  TModelAction
} from "../../model";

import Footer from "../footer";

export default defineComponent({
  props: defaultValues,
  setup({
    type,
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

    const contentRef = ref();

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
      contentRef,
      dispatch
    });
    const direction = drawerDirection(type);

    return (): VNode => <>
      <ElDrawer modelValue={unref(state.modelValue)} direction={direction} destroyOnClose={true} closeOnClickModal={false}>
        {{
          default: () => (slots.default && slots.default()),
          header: () => (slots.title && slots.title()),
          footer: () => (slots?.footer ? slots.footer() : <Footer /> )
        }}
      </ElDrawer>
    </>;
  }
});
