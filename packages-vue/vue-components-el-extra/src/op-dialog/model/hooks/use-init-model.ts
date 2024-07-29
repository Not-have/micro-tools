import {
  computed,
  unref
} from "vue";
import {
  isUndefined
} from "lodash-es";
import {
  IModelValue
} from "../types";
import useModelContext from "./_use-model-context";

export default function useInitModel(): IModelValue["initModel"] {
  const {
    initModel
  } = useModelContext();

  if(isUndefined(unref(initModel))) {
    initModel.value = {};
  }

  return computed({
    get: () => unref(initModel),
    set: newValue => {
      if (initModel.value) {

        // @ts-ignore
        Object.keys(newValue).forEach(key => {

          // @ts-ignore
          if (!(key in initModel.value)) {

            // @ts-ignore
            initModel.value[key] = newValue[key];
          }
        });
      }
    }
  });
}
