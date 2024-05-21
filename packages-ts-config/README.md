# Micro ts config

## Use

`tsconfig.json`

```json
{
  "extends": "micro-ts-config/react.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
}
```