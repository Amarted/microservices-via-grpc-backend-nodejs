// @ts-check
import eslintJs from '@eslint/js';
import { parser as tsParser, config, configs as tsLintConfigs } from "typescript-eslint";
import stylistic from '@stylistic/eslint-plugin';

export default config(
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./**/tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module"
      },
    },
    extends: [
      eslintJs.configs.recommended,
      ...tsLintConfigs.strictTypeChecked,
      ...tsLintConfigs.stylisticTypeChecked,
    ],
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/no-trailing-spaces': "error",
      '@stylistic/semi': "error",
      '@stylistic/no-extra-semi': "error",
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      "@stylistic/brace-style": "error",
      '@stylistic/comma-dangle': ["error", "always-multiline"],
      '@stylistic/comma-spacing': "error",
      '@stylistic/key-spacing': "error",
      '@stylistic/keyword-spacing': "error",
      '@stylistic/space-before-blocks': "error",
      '@stylistic/object-curly-spacing': ["error", "always"],
      '@stylistic/no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
      "@stylistic/eol-last": "error",
      '@stylistic/object-curly-newline': ["error", { "minProperties": 2 }],
      '@stylistic/array-bracket-spacing': ["error", "always"],
      '@stylistic/array-element-newline': ["error", {
        "ArrayExpression": "always",
        "ArrayPattern": { "minItems": 1 },
      }],
      '@stylistic/array-bracket-newline': ["error", { "minItems": 1 }],
      'no-trailing-spaces': "error",
      'no-multi-spaces': "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      '@typescript-eslint/no-extraneous-class': 'off',
    },
  }
);
