import {
  inject
}  from 'vue';
import type {
  IButtonType
} from '../types';

export default function useContext(): IButtonType{
  return inject('button_props')!;
}