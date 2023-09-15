import {
    provide
} from 'vue';
export default function createContext<T extends unknown>(key: string, value: T): void{
    provide(key, value);
}