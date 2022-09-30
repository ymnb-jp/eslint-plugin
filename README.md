# 🪄 @ymnb-jp/eslint-plugin

![Version](https://img.shields.io/github/package-json/v/ymnb-jp/eslint-plugin?style=flat-square)

KML ファイルを [`@ymnb-jp/schemas`](https://github.com/ymnb-jp/schemas) で定義する形式通りに検証し、補完する [ESLint](https://eslint.org/) プラグイン

## Usage

`.eslintrc` でプラグインとして導入することで、XML のパーサとルールが使用できるようになります。

```json
{
  "plugins": ["@ymnb-jp"],
  "extends": ["plugin:@ymnb-jp/recommended"]
}
```

`vscode-eslint`を使用する場合は、`/.vscode/settings.json` で ESLint が KML を認識するよう調整します。

```json
{
  "files.associations": {
    "*.kml": "kml"
  },
  "eslint.validate": ["kml"]
}
```
