import {
  provide
} from "vue";

/**
 * 创建一个 vue 的中间态
 * @param {string} key
 * @param {T} value
 */
export default function createContext<T>(key: string, value: T): void{
  provide(key, value);
}
