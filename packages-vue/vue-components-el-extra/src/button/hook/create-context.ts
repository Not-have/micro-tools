import {
  provide
} from "vue";

export default function createContext<T>(key: string, value: T): void{
  provide(key, value);
}
