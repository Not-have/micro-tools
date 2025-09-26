import {
  EUnknown
} from "./enum";

export default function deviceOperatingSystem(): string {
  const {
    userAgent
  } = navigator;

  if (userAgent.includes("Windows")) {
    return "Windows";
  }

  if (userAgent.includes("Mac")) {
    return "macOS";
  }

  if (userAgent.includes("Linux")) {
    return "Linux";
  }

  if (userAgent.includes("Android")) {
    return "Android";
  }

  if (userAgent.includes("iOS")) {
    return "iOS";
  }

  return EUnknown.UNKNOWN;
}
