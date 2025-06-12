import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// __dirname 설정 (ESM 호환)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 기존 .eslintrc 기반 config 변환기
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  {
    name: "prettier",
    plugins: {
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];
