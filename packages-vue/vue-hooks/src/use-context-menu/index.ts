import {
  onUnmounted,
  getCurrentInstance
} from "vue";

import {
  ICreateContextOptions
} from "./types";
import {
  createContextMenu,
  destroyContextMenu
} from "./rc-container";

export default function useContextMenu(authRemove = true): (((options: ICreateContextOptions) => Promise<unknown> | undefined) | (() => void))[] {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }

  return [createContextMenu, destroyContextMenu];
}
