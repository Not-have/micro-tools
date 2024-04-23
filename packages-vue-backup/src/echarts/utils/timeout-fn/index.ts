export default function timeoutFn(fn: any): void {
    setTimeout(() =>  fn(), 30);
}