import {
  IModelValue
} from "../types";
import {
  createContext
} from "../context";

export default function Provider(props: IModelValue): void{
  createContext(props);
}
