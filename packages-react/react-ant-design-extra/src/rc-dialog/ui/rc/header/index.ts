import React from "react";

import {
  usePropsTitle
} from "../../../model";

export default function Header(): React.ReactElement | undefined | string {

  const title = usePropsTitle();

  return title;
}
