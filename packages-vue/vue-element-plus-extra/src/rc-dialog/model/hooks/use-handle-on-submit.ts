import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";
import usePropsOnSubmit from "./use-props-on-submit";

export default function useHandleOnSubmit(): () => void {
  const onSubmit = usePropsOnSubmit();

  const onClose = usePropsOnClose();

  const dispatchUnlock = useDispatchUnlock();

  return async () => {
    try {
      await onSubmit.value?.();

      await dispatchUnlock();

      await onClose.value?.();
    } catch (error) {
      console.error(error);
    }
  };
}
