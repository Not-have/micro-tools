import fetchClient from "@/request";

export function dataList(value: string) {
  return fetchClient.get(`/api/list?value=${value}`);
}

export function dataObj(value: string) {
  return fetchClient.get(`/api/obj?value=${value}`);
}
