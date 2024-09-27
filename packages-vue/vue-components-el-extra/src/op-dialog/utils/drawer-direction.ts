import {
  EType,
  EDrawerDirection
} from "../enum";

export default function drawerDirection(type?: EType): EDrawerDirection {
  switch(type) {
  case EType.RIGHT:
    return EDrawerDirection.RIGHT;
  case EType.LEFT:
    return EDrawerDirection.LEFT;
  case EType.TOP:
    return EDrawerDirection.TOP;
  case EType.BOTTOM:
    return EDrawerDirection.BOTTOM;
  default:
    return EDrawerDirection.LEFT;
  }
}

;
