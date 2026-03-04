function test(a, b) {
  return a + b;
}

const a = 111;

const b = 22;

const obj = {
  a,
  b
};

const arr = [
  1,
  2
];

export default test;

export {
  a, arr, b, obj
};
