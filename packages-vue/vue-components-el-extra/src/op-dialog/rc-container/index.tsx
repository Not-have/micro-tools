import {
  EType
} from "../enum";
import {
  IProps
} from "../type";

import uiDrawer from "./ui-drawer";
import uiDialog from "./ui-dialog";

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
          handleSuccess,
          handleError
        });

        return;
      }

      uiDialog<T, D>({
        ...rest,
        handleSuccess,
        handleError
      });
    } catch (err){
      // eslint-disable-next-line no-console
      console.error("Error in opDialog:", err);
      reject(err);
    }
  });

}
