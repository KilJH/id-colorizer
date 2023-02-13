module.exports = {
	root: true,
	plugins: ['import'],
	extends: [
		'plugin:import/errors',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-empty-function': 'off',
		// 'import/prefer-default-export': 'off',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
	},
};
