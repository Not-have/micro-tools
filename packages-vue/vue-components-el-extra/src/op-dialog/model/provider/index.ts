import {
  IModelProps
} from "../types";
import {
  createContext
} from "../context";

export default function Provider(props: IModelProps): void{
  createContext({
    props
  });
}
