import {
  h
} from "vue";

type TParameters = Parameters<typeof h>;

export type TChildren = TParameters[2];

export type TExtractProps<T> = T extends new (...args: unknown[]) => { $props: infer P } ? P : never;
