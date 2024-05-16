import {
  IDataDataListDemo
} from "../types";
import {
  fixDemoListData
} from "../fix-data";

export default function dataDemoList(): Promise<IDataDataListDemo[]> {

  return fetch("https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/list").then(req => req.json()).
      then(fixDemoListData).
      catch(err => {
        throw new Error(err);
      });
}
