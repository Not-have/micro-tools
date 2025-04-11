/**
 * 比较对象是否相等
 * @param obj1
 * @param obj2
 * @returns boolean
 */
export default function isEqual(
    obj1: object,
    obj2: object,
    visited = new Set()
): boolean {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
        obj1 === null ||
        typeof obj2 !== "object" ||
        obj2 === null
  ) {
    return false;
  }

  if (visited.has(obj1) || visited.has(obj2)) {
    return true;
  }

  visited.add(obj1);
  visited.add(obj2);

  const keys1 = Object.keys(obj1);

  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    visited.clear();

    return false;
  }

  for (const key of keys1) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key], visited)) {
      visited.clear();

      return false;
    }
  }

  visited.clear();

  // 新增日期比较和数组顺序比较
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime();
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }

    for (const [i, element] of obj1.entries()) {
      if (!isEqual(element, obj2[i], visited)) {
        return false;
      }
    }

    return true;
  }

  return true;
}

// // 测试
// const objA = { a: 1, b: { c: 2 } };
// const objB = { a: 1, b: { c: 2 } };
// const objC = { a: 1, b: { c: 3 } };

// console.log(isEqual(objA, objB)); // true
// console.log(isEqual(objA, objC)); // false

// // 循环引用测试
// const objD = { a: 1, b: { c: 2 } };
// objD.d = objD;

// const objE = { a: 1, b: { c: 2 } };
// objE.b.d = objE;

// console.log(isEqual(objD, objE)); // true
