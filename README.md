# ðª @ymnb-jp/eslint-plugin

![Version](https://img.shields.io/github/package-json/v/ymnb-jp/eslint-plugin?style=flat-square)

KML ãã¡ã¤ã«ã [`@ymnb-jp/schemas`](https://github.com/ymnb-jp/schemas) ã§å®ç¾©ããå½¢å¼éãã«æ¤è¨¼ããè£å®ãã [ESLint](https://eslint.org/) ãã©ã°ã¤ã³

## Usage

`.eslintrc` ã§ãã©ã°ã¤ã³ã¨ãã¦å°å¥ãããã¨ã§ãXML ã®ãã¼ãµã¨ã«ã¼ã«ãä½¿ç¨ã§ããããã«ãªãã¾ãã

```json
{
  "plugins": ["@ymnb-jp"],
  "extends": ["plugin:@ymnb-jp/recommended"]
}
```

`vscode-eslint`ãä½¿ç¨ããå ´åã¯ã`/.vscode/settings.json` ã§ ESLint ã KML ãèªè­ããããèª¿æ´ãã¾ãã

```json
{
  "files.associations": {
    "*.kml": "kml"
  },
  "eslint.validate": ["kml"]
}
```
