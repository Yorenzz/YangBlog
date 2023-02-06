module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': 'warn',
    'no-tabs': 'off',
    'array-bracket-spacing': ["error", "never"],
    'brace-style': "error",
    'camelcase': "error",
    'comma-dangle': ["error", "always-multiline"],
    'comma-spacing': ["error", { "before": false, "after": true }],
    'comma-style': ["error", "last"],
    // "function-paren-newline": ["error", "multiline"]
    "indent": ["error", "tab"],
    "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "error",
    "object-property-newline": "error",
    "object-curly-newline": ["error", {
      "ObjectExpression": "always",
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": "never",
      "ExportDeclaration": "never",
    }],
    "object-curly-spacing": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "quotes": ["error", "single", { "avoidEscape": true }],
    "semi": ["error", "never"],
    "space-before-blocks": "error",
    "space-infix-ops": "error",
    "arrow-spacing": "error",
    "eqeqeq": "error",
    "vue/require-component-is": "error",
    'vue/max-attributes-per-line': ['error', {
      singleline: 1
    }],
    'vue/script-setup-uses-vars': 'error',
    'array-bracket-newline': ['error', { "minItems": 5}],
    'vue/block-tag-newline': ['error', {
      "singleline": "always",
      "multiline": "always",
      "maxEmptyLines": 0,
      "blocks": {
        "script": {
          "singleline": "always",
          "multiline": "always",
          "maxEmptyLines": 0,
        },
        "template": {
          "singleline": "always",
          "multiline": "always",
          "maxEmptyLines": 0,
        },
        "my-block": {
          "singleline": "always",
          "multiline": "always",
          "maxEmptyLines": 0,
        }
      }
    }],
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    "vue/html-quotes": "error",
    "vue/html-self-closing": "error",
    "vue/no-multi-spaces": "error",
    "vue/no-spaces-around-equal-signs-in-attribute": "error",
    "vue/mustache-interpolation-spacing": "error",
    "vue/multiline-html-element-content-newline": ["error", {
      "ignores": [],
    }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "below"
    }],
    'vue/singleline-html-element-content-newline': 'warn',
    "vue/attribute-hyphenation": ["error"],
  }
}
