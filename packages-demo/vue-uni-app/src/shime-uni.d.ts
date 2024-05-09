export {};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  type Hooks = App.AppInstance & Page.PageInstance;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ComponentCustomOptions extends Hooks {}
}
