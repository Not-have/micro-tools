export default function timeoutFn(fn: Function): void {
  setTimeout(() => fn(), 30);
}
