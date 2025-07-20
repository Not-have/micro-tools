import {
  onUnmounted, getCurrentInstance
} from "vue";

import {
  createContextMenu, destroyContextMenu
} from "./rc-container";
import {
  ICreateContextOptions
} from "./types";

export default function useContextMenu(authRemove = true): [
  (options: ICreateContextOptions) => Promise<unknown> | undefined,
  () => void
] {
  if (getCurrentInstance() && authRemove) {
    onUnmounted(() => {
      destroyContextMenu();
    });
  }

  return [
    createContextMenu, destroyContextMenu
  ];
}
