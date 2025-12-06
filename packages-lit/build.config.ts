import {
  defineBuildConfig
} from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index"
  ],
  externals: [
    /^lit/,
    /^@lit\//,
    /^lit-html/,
    /^lit-element/,
    /^trusted-types/
  ],
  clean: true,
  declaration: true
});
