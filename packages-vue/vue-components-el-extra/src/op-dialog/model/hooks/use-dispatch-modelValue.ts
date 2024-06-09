import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchModelValue(): (loading: boolean) => void {
  const dispatch = useModelDispatch();

  return (loading: boolean) => {
    dispatch({
      type: "modelValue",
      payload: loading
    });
  };
}
