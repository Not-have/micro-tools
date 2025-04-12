import {
  TooltipComponentOption
} from "echarts";

export default function tooltip(): TooltipComponentOption {
  return {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        width: 1,
        color: "#019680"
      }
    }
  };
}
