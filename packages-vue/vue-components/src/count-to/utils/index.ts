// 判断是否为number
export const isNumber = (val: string): boolean => !Number.isNaN(Number.parseFloat(val));
