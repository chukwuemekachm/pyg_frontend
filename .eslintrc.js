module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly",
      "describe": true,
      "it": true,
      "before": true,
      "expect": true,
      "beforeAll": true,
      "afterAll": true,
      "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "import/no-unresolved": "off"
  },
  "overrides": [
      {
          "files": [
              "webpack.*.js"
          ],
          "rules": {
              "import/no-dynamic-require": "off",
              "no-unused-expressions": "off",
              "global-require": "off",
              "import/no-extraneous-dependencies": "off",
              "key-spacing": "off"
          }
      },
      {
          "files": [
              "*.test.js",
              "*.test.jsx"
          ],
          "rules": {
              "no-unused-expressions": "off"
          }
      }
  ]
}
