// / <reference types='@dcloudio/types' />
import "vue";

declare module "@vue/runtime-core" {

  // eslint-disable-next-line @typescript-eslint/naming-convention
  type Hooks = App.AppInstance & Page.PageInstance;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ComponentCustomOptions extends Hooks {

  }
}
