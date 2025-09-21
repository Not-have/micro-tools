import useModelProps from "./_use-model-props";

/**
 * @deprecated
 */
export default function usePropsOnClose<T extends object = Record<string, unknown>>(): ((result?: T | Error, rejected?: boolean) => void) | undefined {
  const props = useModelProps();

  return props?.onClose;
}
