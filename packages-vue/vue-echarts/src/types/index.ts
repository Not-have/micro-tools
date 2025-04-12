export interface IFn<T = unknown, R = T> {
  (...arg: T[]): R;
}
