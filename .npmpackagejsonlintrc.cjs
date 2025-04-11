/**
 * 规定 packages.json 文件
 *
 * 顺序在 eslint 里面已经规定，但是必须字段怎么设置，目前没有找到
 */
module.exports = {
  extends: "npm-package-json-lint-config-default",
  rules: { // rules ref: https://npmpackagejsonlint.org/docs/rules
    // required stuff
    "require-description": "error",
    "require-keywords": "error",
    "require-license": "error",
    "require-author": "error",
    "require-bugs": "error",
    "require-repository": "error",

    // homepage 是否必须存在
    "require-homepage": "warning",

    // format
    "name-format": "error",
    "version-format": "error",
    "description-format": ["error", {
      requireCapitalFirstLetter: true,
      requireEndingPeriod: false
    }],

    // no- / prefer-
    "no-repeated-dependencies": "error",
    "no-duplicate-properties": "error",
    "prefer-alphabetical-peerDependencies": "error",
    "prefer-alphabetical-dependencies": "error",
    "prefer-alphabetical-devDependencies": "error",
    "prefer-alphabetical-optionalDependencies": "error",
    "prefer-alphabetical-bundledDependencies": "error",
    "prefer-property-order": "off"
  }
};
