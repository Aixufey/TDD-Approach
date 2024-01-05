const vitest = require("eslint-plugin-vitest");

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:testing-library/react",
        "plugin:vitest/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off", // Disable prop-types check for components
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
    globals: {
        ...vitest.environments.env.globals,
    },
};