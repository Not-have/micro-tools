import {
  ref,
  Ref,
  onMounted,
  watchEffect
} from "vue";

import {
  TFormInstance
} from "../types";
import useDispatchForm from "./use-dispatch-form";
import useDispatchFormData from "./use-dispatch-form-data";
import useStateData from "./use-state-data";

export default function useForm<D extends Record<string, unknown> | unknown = Record<string, unknown>>(): [Ref<TFormInstance>, Ref<D>, Ref<D>] {
  const dispatchForm = useDispatchForm();

  const dispatchFormData = useDispatchFormData();

  const data = useStateData();

  const form = ref<TFormInstance>(null);

  const _formData = ref<D>({
    ...data.value
  } as D);

  onMounted(() => {
    if (!form.value) {
      return;
    }

    dispatchForm(form.value);
  });

  watchEffect(() => {
    dispatchFormData(_formData.value);
  });

  return [
    form,
    _formData as Ref<D>,
    data as Ref<D>
  ];
}
