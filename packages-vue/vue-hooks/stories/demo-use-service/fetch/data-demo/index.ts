import {
  IDataDataDemo
} from "../types";

import {
  fixDemoData
} from "../fix-data";

export default function dataDemo(): Promise<IDataDataDemo> {

  return fetch("https://mock.mengxuegu.com/mock/61922927f126df7bfd5b79ef/promise/promise3#!method=get").then(req => req.json()).
    then(fixDemoData).
    catch(err => {
      throw new Error(err);
    });
}
