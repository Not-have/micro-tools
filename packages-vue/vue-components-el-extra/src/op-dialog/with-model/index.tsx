import {
  defineComponent
} from "vue";

import {
  IProps
} from "../type";
import provider from "../model";
import rcContainer from "../rc-container";

export default defineComponent({
  setup(props: IProps) {
    provider(props);

    rcContainer(props);
  }
});
