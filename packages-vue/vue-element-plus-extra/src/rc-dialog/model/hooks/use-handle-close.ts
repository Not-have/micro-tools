import useDispatchUnlock from "./use-dispatch-unlock";
import usePropsOnClose from "./use-props-on-close";

export default function useHandleClose(): () => void {

  const onClose = usePropsOnClose();

  const dispatchUnlock = useDispatchUnlock();

  return () => {
    dispatchUnlock();

    onClose.value?.();
  };
}
