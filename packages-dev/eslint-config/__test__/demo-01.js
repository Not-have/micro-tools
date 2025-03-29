function test(a, b) {
  return a + b;
}

const a = 111;

const b = 22;

const obj = {
  a,
  b
};

export default test;

export {
  a,
  b,
  obj
};
