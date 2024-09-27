import {
  EDataType
} from "../enum";

export default function fixScope(value): typeof value {
  if (JSON.stringify(value) === "{}") {
    return {};
  }

  if (JSON.stringify(value) === "{}") {
    return {};
  }

  if (!value) {
    return {};
  }

  if (value?.dataType === EDataType.NO_DATA) {
    return {};
  }

  return value;
}
