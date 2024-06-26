import {
  inject
} from "vue";

/**
 * 读取 vue 的中间态
 * @param { string } key
 * @return
 */
export default function useContext<T>(key: string): T{
  return inject(key)!;
}
