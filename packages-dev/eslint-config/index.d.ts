declare module "@mt-kit/eslint-config" {

  // 声明模块存在，让TypeScript自动推断类型
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
  // eslint-disable-next-line no-restricted-syntax
  export = content;
}
