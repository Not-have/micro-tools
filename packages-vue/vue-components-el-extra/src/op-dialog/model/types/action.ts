export type TModelAction = {
  type: "modelValue";
  payload: boolean;
} | {
  type: "isEqual",
  payload: boolean;
} | {
  type: "loading",
  payload: boolean;
};

export type TModelDispatch = (arg0: TModelAction) => void;
