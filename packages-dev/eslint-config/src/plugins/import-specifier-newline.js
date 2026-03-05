export default {
  rules: {
    "import-specifier-newline": {
      meta: {
        type: "layout",
        fixable: "whitespace",
        docs: {
          description: "force every import specifier to be on a new line"
        }
      },
      create(context) {
        const sourceCode = context.sourceCode || context.getSourceCode();

        return {
          ImportDeclaration(node) {
            if (!node.specifiers || node.specifiers.length === 0) {
              return;
            }

            const {
              specifiers
            } = node;

            const starts = specifiers.map(s => s.loc && s.loc.start.line);

            const uniqueLines = new Set(starts.filter(Boolean));

            if (uniqueLines.size === specifiers.length) {
              return;
            }

            context.report({
              node,
              message: "每个具名导入需独占一行",
              fix(fixer) {
                const fixes = [];

                for (let i = 0; i < specifiers.length - 1; i++) {
                  const current = specifiers[i];

                  const comma = sourceCode.getTokenAfter(current, token => token.value === ",");

                  if (!comma) {
                    continue;
                  }

                  const next = sourceCode.getTokenAfter(comma);

                  const betweenRangeStart = comma.range[1];

                  const betweenRangeEnd = next.range[0];

                  fixes.push(fixer.replaceTextRange([
                    betweenRangeStart,
                    betweenRangeEnd
                  ], "\n  "));
                }

                return fixes;
              }
            });
          }
        };
      }
    }
  }
};
