module.exports = {
	ignorePatterns: ["node_modules"],
	env: {
		browser: true,
		es6: true
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"next/core-web-vitals"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	settings: {
		react: {
			version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"linebreak-style": ["error", "unix"],
		"quotes": ["warn", "double"],
		"semi": ["error", "always"],
		"curly": ["error", "multi"],
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		"comma-dangle": ["error", {
			"arrays": "never",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }]
	}
};
