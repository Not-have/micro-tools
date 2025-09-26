/**
 * 💻 CPU 核心数
 */
export default function deviceCpuCores(): number {
  return navigator.hardwareConcurrency;
}
