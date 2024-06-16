import {
  fetchSubmit
} from "../fetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function submit(value: any): Promise<boolean> {
  return fetchSubmit(value ? "success" : "fail");
}
