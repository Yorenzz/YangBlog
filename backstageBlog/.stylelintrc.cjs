module.exports = {
	extends: [
		"stylelint-config-standard",
	],
	plugins: ["stylelint-scss"],
	customSyntax: "postcss-scss",
	rules: {
		"at-rule-no-unknown": [
			true,
		],
		"selector-class-pattern": "^[a-z][a-zA-Z0-9]+$"
	},
};

