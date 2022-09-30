import { TSESLint } from '@typescript-eslint/utils'
import { HTMLElement } from 'eslint-html-parser'
import { load as loadXml } from 'cheerio'

export const requireId: TSESLint.RuleModule<'requireId', []> = {
  meta: {
    type: 'problem',
    fixable: 'code',
    docs: {
      description: 'featureは参照を区別するためにIDを持つ必要があります。',
      recommended: 'error',
    },
    messages: {
      requireId: 'featureにIDが指定されていません。',
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => ({
    'HTMLElement[tagName="Placemark"]': (node: HTMLElement) => {
      const $ = loadXml(node.value)
      if (!$.root().attr('id')) {
        const id =
          $('name').text() || Math.floor(Math.random() * 1000000).toString()

        context.report({
          loc: {
            start: node.loc.start,
            end: {
              line: node.loc.start.line + 1,
              column: -1,
            },
          },
          messageId: 'requireId',
          fix: (fixer) =>
            fixer.insertTextAfterRange(
              [node.range[0], node.range[0] + `<${node.tagName}`.length],
              ` id="${id}"`
            ),
        })
      }
    },
  }),
}
