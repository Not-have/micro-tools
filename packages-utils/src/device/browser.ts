import {
  EUnknown
} from "./enum";

interface IBrowser {
  name: string;
  version: string | EUnknown;
}

export default function browser(): IBrowser {

  const {
    userAgent
  } = navigator;

  const match = userAgent.match(/(chrome|firefox|safari|edge|msie|trident(?=\/))\/?\s*(\d+)/i);

  const version = match?.[2] || EUnknown.UNKNOWN;

  if (userAgent.includes("Chrome")) {
    return {
      name: "Chrome",
      version
    };
  }

  if (userAgent.includes("Firefox")) {
    return {
      name: "Firefox",
      version
    };
  }

  if (userAgent.includes("Safari")) {
    return {
      name: "Safari",
      version
    };
  }

  if (userAgent.includes("Edge")) {
    return {
      name: "Edge",
      version
    };
  }

  if (userAgent.includes("IE")) {
    return {
      name: "IE",
      version
    };
  }

  return {
    name: EUnknown.UNKNOWN,
    version
  };
}
