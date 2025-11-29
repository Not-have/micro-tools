import {
  requestClient
} from "@/request";

export function dataList() {
  return requestClient.get("/api/list");
}
