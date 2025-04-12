import {
  IData0DataListDemo,
  TDataDataListDemo
} from "../types";

export default function fixDemoListData(data0: IData0DataListDemo): TDataDataListDemo[] {
  return data0?.list || [];
}
