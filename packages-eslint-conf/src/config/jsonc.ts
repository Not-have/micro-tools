import type {
  Linter
} from "eslint";

import {
  interopDefault
} from "../util";

export async function jsonc(): Promise<Linter.Config[]> {
  const [pluginJsonc, parserJsonc] = await Promise.all([
    interopDefault(import("eslint-plugin-jsonc")),
    interopDefault(import("jsonc-eslint-parser"))
  ] as const);

  return [
    {
      files: ["**/*.json", "**/*.json5", "**/*.jsonc", "*.code-workspace"],
      languageOptions: {
        parser: parserJsonc
      },
      plugins: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jsonc: pluginJsonc as any
      },
      rules: {
        "jsonc/no-bigint-literals": "error",
        "jsonc/no-binary-expression": "error",
        "jsonc/no-binary-numeric-literals": "error",
        "jsonc/no-dupe-keys": "error",
        "jsonc/no-escape-sequence-in-identifier": "error",
        "jsonc/no-floating-decimal": "error",
        "jsonc/no-hexadecimal-numeric-literals": "error",
        "jsonc/no-infinity": "error",
        "jsonc/no-multi-str": "error",
        "jsonc/no-nan": "error",
        "jsonc/no-number-props": "error",
        "jsonc/no-numeric-separators": "error",
        "jsonc/no-octal": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/no-octal-numeric-literals": "error",
        "jsonc/no-parenthesized": "error",
        "jsonc/no-plus-sign": "error",
        "jsonc/no-regexp-literals": "error",
        "jsonc/no-sparse-arrays": "error",
        "jsonc/no-template-literals": "error",
        "jsonc/no-undefined-value": "error",
        "jsonc/no-unicode-codepoint-escapes": "error",
        "jsonc/no-useless-escape": "error",
        "jsonc/space-unary-ops": "error",
        "jsonc/valid-json-number": "error",
        "jsonc/vue-custom-block/no-parsing-error": "error"
      }
    },
    sortTsconfig(),
    sortPackageJson()
  ];
}

function sortPackageJson(): Linter.Config {
  return {
    files: ["**/package.json"],
    rules: {
      "jsonc/sort-array-values": [
        "error",
        {
          order: {
            type: "asc"
          },
          pathPattern: "^files$|^pnpm.neverBuiltDependencies$"
        }
      ],
      "jsonc/sort-keys": [
        "error",
        {
          order: [
            "name",
            "version",
            "description",
            "private",
            "keywords",
            "homepage",
            "bugs",
            "repository",
            "license",
            "author",
            "contributors",
            "categories",
            "funding",
            "type",
            "scripts",
            "files",
            "sideEffects",
            "bin",
            "main",
            "module",
            "unpkg",
            "jsdelivr",
            "types",
            "typesVersions",
            "imports",
            "exports",
            "publishConfig",
            "icon",
            "activationEvents",
            "contributes",
            "peerDependencies",
            "peerDependenciesMeta",
            "dependencies",
            "optionalDependencies",
            "devDependencies",
            "engines",
            "packageManager",
            "pnpm",
            "overrides",
            "resolutions",
            "husky",
            "simple-git-hooks",
            "lint-staged",
            "eslintConfig"
          ],
          pathPattern: "^$"
        },
        {
          order: {
            type: "asc"
          },
          pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies(Meta)?$"
        },
        {
          order: {
            type: "asc"
          },
          pathPattern: "^(?:resolutions|overrides|pnpm.overrides)$"
        },
        {
          order: ["types", "import", "require", "default"],
          pathPattern: "^exports.*$"
        }
      ]
    }
  };
}

function sortTsconfig(): Linter.Config {
  return {
    files: [
      "**/tsconfig.json",
      "**/tsconfig.*.json",
      "internal/tsconfig/*.json"
    ],
    rules: {
      "jsonc/sort-keys": [
        "error",
        {
          order: [
            "extends",
            "compilerOptions",
            "references",
            "files",
            "include",
            "exclude"
          ],
          pathPattern: "^$"
        },
        {
          order: [

            /* Projects */
            "incremental",
            "composite",
            "tsBuildInfoFile",
            "disableSourceOfProjectReferenceRedirect",
            "disableSolutionSearching",
            "disableReferencedProjectLoad",

            /* Language and Environment */
            "target",
            "jsx",
            "jsxFactory",
            "jsxFragmentFactory",
            "jsxImportSource",
            "lib",
            "moduleDetection",
            "noLib",
            "reactNamespace",
            "useDefineForClassFields",
            "emitDecoratorMetadata",
            "experimentalDecorators",

            /* Modules */
            "baseUrl",
            "rootDir",
            "rootDirs",
            "customConditions",
            "module",
            "moduleResolution",
            "moduleSuffixes",
            "noResolve",
            "paths",
            "resolveJsonModule",
            "resolvePackageJsonExports",
            "resolvePackageJsonImports",
            "typeRoots",
            "types",
            "allowArbitraryExtensions",
            "allowImportingTsExtensions",
            "allowUmdGlobalAccess",

            /* JavaScript Support */
            "allowJs",
            "checkJs",
            "maxNodeModuleJsDepth",

            /* Type Checking */
            "strict",
            "strictBindCallApply",
            "strictFunctionTypes",
            "strictNullChecks",
            "strictPropertyInitialization",
            "allowUnreachableCode",
            "allowUnusedLabels",
            "alwaysStrict",
            "exactOptionalPropertyTypes",
            "noFallthroughCasesInSwitch",
            "noImplicitAny",
            "noImplicitOverride",
            "noImplicitReturns",
            "noImplicitThis",
            "noPropertyAccessFromIndexSignature",
            "noUncheckedIndexedAccess",
            "noUnusedLocals",
            "noUnusedParameters",
            "useUnknownInCatchVariables",

            /* Emit */
            "declaration",
            "declarationDir",
            "declarationMap",
            "downlevelIteration",
            "emitBOM",
            "emitDeclarationOnly",
            "importHelpers",
            "importsNotUsedAsValues",
            "inlineSourceMap",
            "inlineSources",
            "mapRoot",
            "newLine",
            "noEmit",
            "noEmitHelpers",
            "noEmitOnError",
            "outDir",
            "outFile",
            "preserveConstEnums",
            "preserveValueImports",
            "removeComments",
            "sourceMap",
            "sourceRoot",
            "stripInternal",

            /* Interop Constraints */
            "allowSyntheticDefaultImports",
            "esModuleInterop",
            "forceConsistentCasingInFileNames",
            "isolatedModules",
            "preserveSymlinks",
            "verbatimModuleSyntax",

            /* Completeness */
            "skipDefaultLibCheck",
            "skipLibCheck"
          ],
          pathPattern: "^compilerOptions$"
        }
      ]
    }
  };
}