module.exports = {
  extends: "npm-package-json-lint-config-default",
  rules: { // rules ref: https://npmpackagejsonlint.org/docs/rules
    "description-format": ["error", {
      requireCapitalFirstLetter: true,
      requireEndingPeriod: false
    }],

    // format
    "name-format": "error",
    "no-duplicate-properties": "error",

    // no- / prefer-
    "no-repeated-dependencies": "error",
    "prefer-alphabetical-bundledDependencies": "error",
    "prefer-alphabetical-dependencies": "error",
    "prefer-alphabetical-devDependencies": "error",
    "prefer-alphabetical-optionalDependencies": "error",
    "prefer-alphabetical-peerDependencies": "error",
    "prefer-property-order": "off",
    "require-author": "error",
    "require-bugs": "error",

    // required stuff
    "require-description": "error",
    "require-homepage": "off",
    "require-keywords": "error",
    "require-license": "error",
    "require-repository": "error",
    "version-format": "error"

    /*
    'prefer-property-order': ['error', [
      // basic info
      'name',
      'version',
      'description',
      'keywords',
      'license',
      // output
      'private',
      'sideEffects',
      'files',
      'exports',
      'main',
      'module',
      'umd',
      'browser',
      'types',
      'directories',
      'bin',
      'man',
      // repo info
      'author',
      'authors',
      'contributors',
      'homepage',
      'repository',
      'publishConfig',
      'bugs',
      'funding',
      'workspaces',
      // env
      'engines',
      'os',
      'cpu',
      // dep
      'packageManager',
      'peerDependencies',
      'peerDependenciesMeta',
      'devDependencies',
      'dependencies',
      'bundleDependencies',
      'optionalDependencies',
      'overrides',
      // config
      'pre-commit',
      'lint-staged',
      'eslintConfig',
      'stylelint',
      'npmpackagejsonlint',
      'babel',
      'browserify',
      // npm run
      'config',
      'scripts'
    ]]
    */
  }
};
