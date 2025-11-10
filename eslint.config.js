import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import pluginReactHooks from "eslint-plugin-react-hooks";


export default tseslint.config(
  {
    // Configuration for JavaScript files (e.g., config files)
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    extends: [
      pluginJs.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Add node globals for config files
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    // Configuration for TypeScript and JSX/TSX files
    files: ["**/*.{ts,jsx,tsx}"],
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      ...fixupConfigRules(pluginReactConfig),
    ],
    plugins: {
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off", // Not needed for React 17+ with new JSX transform
      "react/jsx-uses-react": "off", // Not needed for React 17+ with new JSX transform
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    // Ignore build output and node_modules
    ignores: ["dist/", "node_modules/"],
  }
);
