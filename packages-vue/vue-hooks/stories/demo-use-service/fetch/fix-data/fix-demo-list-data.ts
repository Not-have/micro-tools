import {
  IData0DataListDemo,
  IDataDataListDemo
} from "../types";

export default function fixDemoListData(data0: IData0DataListDemo): IDataDataListDemo[]{
  return data0?.list || [];
}
