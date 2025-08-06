declare module "@mt-kit/prettier-config" {

  // Prettier配置类型
  interface IPrettierConfig {
    overrides?: Array<{
      files: string[];
      options: {
        quoteProps?: "as-needed" | "consistent" | "preserve";
        singleQuote?: boolean;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
      };
    }>;
    printWidth?: number;
    proseWrap?: "always" | "never" | "preserve";
    semi?: boolean;
    singleQuote?: boolean;
    trailingComma?: "none" | "es5" | "all";
    arrowParens?: "avoid" | "always";
    singleAttributePerLine?: boolean;
    bracketSpacing?: boolean;
    tabWidth?: number;
    useTabs?: boolean;
    endOfLine?: "lf" | "crlf" | "cr" | "auto";
    embeddedLanguageFormatting?: "auto" | "off";
    vueIndentScriptAndStyle?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  // 导出默认配置
  const config: IPrettierConfig;
  export default config;
}
