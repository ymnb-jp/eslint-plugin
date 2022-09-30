import { requireDataElement } from './rules/require-data-element'
import { requireId } from './rules/require-id'

export = {
  rules: {
    'require-id': requireId,
    'require-data-element': requireDataElement,
  },
  configs: {
    recommended: {
      parser: 'eslint-html-parser',
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        '@ymnb-jp/require-id': 'error',
        '@ymnb-jp/require-data-element': 'error',
      },
    },
  },
}
