import {
  apiTest02
} from "../api";

export default async function submit(data: unknown): Promise<boolean> {

  // eslint-disable-next-line no-console
  console.log("data", data);

  return apiTest02().then(() => true);
}
