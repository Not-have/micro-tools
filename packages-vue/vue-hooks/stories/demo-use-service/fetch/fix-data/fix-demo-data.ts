import {
  IData0DataDemo,
  IDataDataDemo
}from "../types";

export default function fixDemoData(data0: IData0DataDemo): IDataDataDemo {
  return {
    title: data0.data.title,
    content: data0.data.content,
    author: data0.data.author
  };
}
