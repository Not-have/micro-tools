/**
 * 使用 node 测试
 */
import cloneDeep from "../dist/clone-deep/index.js";

/**
 * JSON.parse(JSON.stringify(value)) 的缺陷演示
 */
const s1 = Symbol("aa");

const s2 = Symbol();

const obj = {
  name: "里斯",
  friend: {
    name: "悍匪"
  },
  emperor(a, b) {
    console.log(`侵蚀黄${ a }${b}`);
  },
  [s1]: "我是 s1 的 value",
  s2,
  moreFriend: ["帐汗", "昭告"],
  set: new Set(["aa", "bb"])
};

/**
 * 循环引用，报错信息：
 * Uncaught TypeError: Converting circular structure to JSON
 *     --> starting at object with constructor 'Object'
 *     --- property 'inner' closes the circle
 *     at JSON.stringify (<anonymous>)
 *     at demo-clone-deep.html?_ijt=8s0scsr1i4m278faqqild9nvvt&_ij_reload=RELOAD_ON_SAVE:33:43
 */
/*
obj.inner = obj;

const obj1CloneDeep = JSON.parse(JSON.stringify(obj));
console.log(obj === obj1CloneDeep);

// 修改
obj.friend.name = '呈交';
console.log(obj1CloneDeep);
*/

/**
 * 正常的深拷贝
 */
const cloneDeepObj = cloneDeep(obj);

obj.friend.name = "呈交";
obj.moreFriend = [1, 2, 3];
console.log(cloneDeepObj);
