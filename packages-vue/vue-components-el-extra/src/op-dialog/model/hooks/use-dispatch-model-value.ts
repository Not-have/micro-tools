import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchModelValue(): (loading?: boolean) => void {
  const dispatch = useModelDispatch();

  return (modelValue: boolean = false) => {
    dispatch({
      type: "modelValue",
      payload: modelValue
    });
  };
}
