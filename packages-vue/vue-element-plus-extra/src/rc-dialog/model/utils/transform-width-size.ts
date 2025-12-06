import {
  ESize
} from "../enum";

export default function transformWidthSize(size: ESize | number): string {

  switch (size) {
    case ESize.XS: {
      return "200px";
    }
    case ESize.S: {
      return "300px";
    }
    case ESize.M: {
      return "400px";
    }
    case ESize.L: {
      return "500px";
    }
    case ESize.XL: {
      return "600px";
    }
    case ESize.XXL: {
      return "700px";
    }
    case ESize.AUTO: {
      return "auto";
    }
    case ESize.ALMOST_FULL: {
      return "90%";
    }
    case ESize.FULL: {
      return "100%";
    }
    default: {
      return `${String(size)}px`;
    }
  }
}
