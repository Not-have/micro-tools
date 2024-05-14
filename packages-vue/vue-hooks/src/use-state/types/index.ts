import {
  Ref,
  UnwrapNestedRefs
} from "vue";

export type TRef<T> = Ref<T>;

export type TUnwrapNestedRefs<T> = UnwrapNestedRefs<T>;

export type TState<T> = T extends object ? TUnwrapNestedRefs<T> : TRef<T>

/**
 * SetState 的类型
 */
export type TSetStateAction<S> = S | ((prevState: S) => S);

export type TDispatchFn<A> = (value?: A) => void;

export type TDispatch<T> = TDispatchFn<TSetStateAction<T>>;

export type TRecord = Record<string, unknown>
