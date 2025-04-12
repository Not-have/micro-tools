import {
  inject
} from "vue";

/**
 * 读取 vue 的中间态
 * @param { string } key
 * @return
 */
export default function useContext<T>(key: string): T {
  const injectedValue = inject<T>(key);

  if (!injectedValue) {
    throw new Error(`Injection for key "${key}" not found.`);
  }

  return injectedValue;
}
