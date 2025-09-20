import React from "react";

import {
  useStateLocked
} from "../model";

export default function Ui(): React.ReactElement {
  const locked = useStateLocked();

  return <div>
    {locked}
  </div>;
}
