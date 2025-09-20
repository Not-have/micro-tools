import useModelProps from "./_use-model-props";

export default function usePropsClose(): ((result?: undefined, rejected?: boolean) => void) | null {
  const props = useModelProps();

  return props.close as ((result?: undefined, rejected?: boolean) => void) | null;
}
