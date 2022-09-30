import { requireId } from './rules/require-id'

export = {
  rules: {
    'require-id': requireId,
  },
  configs: {
    recommended: {
      parser: 'eslint-html-parser',
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        '@ymnb-jp/require-id': 'error',
      },
    },
  },
}
