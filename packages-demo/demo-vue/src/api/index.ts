import fetchClient from "@/request";

export function dataList() {
  return fetchClient.get("/api/list");
}
