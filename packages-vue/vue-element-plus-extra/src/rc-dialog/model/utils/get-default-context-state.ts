import {
  ELockState
} from "../enum";
import {
  IModelState,
  IDialogProps
} from "../types";

let idIncrementer = 0;

function getId(): string {
  idIncrementer += 1;

  return `${idIncrementer}`; // 不要拼接其他的 因为逻辑中会用它来做数字比较
}

export default function getDefaultContextState(props: IDialogProps): IModelState {
  return {
    id: getId(),
    active: false,
    locked: ELockState.NO,
    zIndex: -1,
    data: props.data,
    dataLoading: false,
    windowHeight: window.innerHeight,
    form: null,
    formData: null
  };
}
