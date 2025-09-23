export interface IDialogIndirectPromise<T = void> {
  promise: Promise<T>;
  close(result?: T | Error, rejected?: boolean): void;
  destroy(): void;
}
