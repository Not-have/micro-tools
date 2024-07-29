import useModelDispatch from "./_use-model-dispatch";

export default function useDispatchLoading(): (loading: boolean) => void {
  const dispatch = useModelDispatch();

  return (loading: boolean) => {
    dispatch({
      type: "loading",
      payload: loading
    });
  };
}
