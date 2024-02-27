import {
  inject
}  from 'vue';
import type {
  IButtonType
} from '../types';

export default function useContext(key: string): IButtonType{
  return inject(key)!;
}