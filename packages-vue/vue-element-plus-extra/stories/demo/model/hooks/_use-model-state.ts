import {
  inject
} from "vue";

export default function useModelState() {
  return inject("model") as Record<string, unknown>;
}
