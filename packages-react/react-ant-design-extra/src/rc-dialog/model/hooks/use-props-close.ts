import useModelProps from "./_use-model-props";

/**
 * @deprecated
 */
export default function usePropsClose(): ((result?: undefined | Error | boolean, rejected?: boolean) => void) | null {
  const props = useModelProps();

  return props.close as ((result?: undefined | Error | boolean, rejected?: boolean) => void) | null;
}
