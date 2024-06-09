import {
  EType
} from "../enum";
import {
  IProps
} from "../type";

import uiDrawer from "./ui-drawer";
import uiDialog from "./ui-dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function opDialog<T, D = any>(props: IProps<T>): Promise<D> {

  return new Promise((resolve, reject) => {
    const handleSuccess = (result: D): void => {
      resolve(result);
    };

    const handleError = (error: unknown): void => {
      reject(error);
    };

    try{
      if(props.type !== EType.CENTER) {
        uiDrawer({
          ...props,
          handleSuccess,
          handleError
        });

        return;
      }

      uiDialog({
        ...props,
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
