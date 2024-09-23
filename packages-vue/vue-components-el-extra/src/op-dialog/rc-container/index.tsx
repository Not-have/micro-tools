import {
  EType
} from "../enum";
import {
  IProps
} from "../type";
import uiDialog from "./ui-dialog";
import uiDrawer from "./ui-drawer";

export default function opDialog<T, D>({
  type = EType.CENTER,
  ...rest
}: IProps<T>): Promise<D> {
  return new Promise((resolve, reject) => {
    const handleSuccess = (result: D): void => {
      resolve(result);
    };

    const handleError = (error: unknown): void => {
      reject(error);
    };

    try{
      if(type !== EType.CENTER) {
        uiDrawer<T, D>({
          ...rest,
          handleError,
          handleSuccess
        });

        return;
      }

      uiDialog<T, D>({
        ...rest,
        handleError,
        handleSuccess
      });
    } catch (err){

      console.error("Error in opDialog:", err);
      reject(err);
    }
  });

}
