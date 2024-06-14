import {
  PropType,
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
  drawerDirection
} from "../../utils";

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
      value: params.fieldsValue
    });

    const contentRef = ref();

    const parentRef = ref();

    const dispatch = (arg: TModelAction): void => {

      // @ts-ignore
      state[arg.type] = arg.payload;
    };

    provider({
      props: params,
      state,
      contentRef,
      parentRef,
      dispatch
    });
    const direction = drawerDirection(params.type);

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
