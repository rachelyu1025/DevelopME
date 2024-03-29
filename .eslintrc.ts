module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      // "project": "./tsconfig.json",
      "sourceType": "module",
      "tsconfigRootDir": __dirname
  },
  "plugins": ["@typescript-eslint"],
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "airbnb",
      "airbnb-typescript",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "prettier/prettier" : "error",
    "no-console": "error",
    "react/jsx-filename-extension": [
        1,
        { "extensions": [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "react/function-component-definition": [
        2,
        { "namedComponents": "arrow-function" }
    ],
    "react/prop-types": 0,
    "import/no-unresolved": "off",
    "import/no-cycle": "off",
    "no-param-reassign": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies" : "off", 
    "jsx-a11y/label-has-associated-control": [
      2,  
      {
        "labelAttributes": ["htmlFor"]
      }
    ]
  }
}