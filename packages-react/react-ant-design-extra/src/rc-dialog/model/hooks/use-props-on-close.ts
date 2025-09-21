import useModelProps from "./_use-model-props";

/**
 * @deprecated
 */
export default function usePropsClose(): ((result?: undefined | Error | boolean, rejected?: boolean) => void) | undefined {
  const props = useModelProps();

  return props.onClose;
}
