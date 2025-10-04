import useModelState from "./_use-model-state";

export default function useModelStateA() {
  const state = useModelState();

  return state.a;
}
