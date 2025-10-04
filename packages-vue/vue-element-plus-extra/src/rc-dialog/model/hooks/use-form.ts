import {
  ref,
  Ref,
  onMounted
} from "vue";

import {
  TFormInstance
} from "../types";
import useDispatchForm from "./use-dispatch-form";
import useStateData from "./use-state-data";
import useStateFormData from "./use-state-form-data";

export default function useForm<D extends Record<string, unknown> | unknown = Record<string, unknown>>(): [Ref<TFormInstance>, Ref<D>, Ref<D>] {
  const dispatchForm = useDispatchForm();

  const formData = useStateFormData();

  const data = useStateData();

  const form = ref<TFormInstance>(null);

  onMounted(() => {
    if (!form.value) {
      return;
    }

    dispatchForm(form.value);
  });

  return [
    form,
    formData as Ref<D>,
    data as Ref<D>
  ];
}
