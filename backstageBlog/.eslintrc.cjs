module.exports = {
	extends: [
			"eslint:recommended",
	],
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
		jsxPragma: 'React',
		requireConfigFile: false,
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		commonjs: true
	},
	rules: {
		'no-console': 'warn',
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
		"no-unused-vars": "off",
		"no-use-before-define": "off",
		"object-property-newline": "error",
		"object-curly-newline": ["error", { "multiline": true }],
		"object-curly-spacing": ["error", "always"],
		"operator-linebreak": ["error", "before"],
		"quotes": ["error", "single", { "avoidEscape": true }],
		"semi": ["error", "never"],
		"space-before-blocks": "error",
		"space-infix-ops": "error",
		"arrow-spacing": "error",
		"eqeqeq": "error",
	}
}
