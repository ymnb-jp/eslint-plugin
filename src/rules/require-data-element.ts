import type { TSESLint, TSESTree } from '@typescript-eslint/utils'
import type { HTMLElement } from 'eslint-html-parser'
import { load as loadXml } from 'cheerio'

export const requireDataElement: TSESLint.RuleModule<'requireDataElement', []> =
  {
    meta: {
      type: 'problem',
      fixable: 'code',
      messages: {
        requireDataElement: 'featureにymnb schemaのExtendedDataがありません。',
      },
      schema: [],
    },
    defaultOptions: [],
    create: (context) => ({
      'HTMLElement[tagName="Placemark"]': (node: HTMLElement) => {
        const $ = loadXml(node.value, {
          xml: true,
          xmlMode: true,
          decodeEntities: false,
        })
        const extendedData = $('ExtendedData')
        const schemaData = $(
          'SchemaData[schemaUrl="http://schema.ymnb.jp/v1/schema.kml"]'
        )

        if (schemaData.length === 0) {
          const tag = `<SchemaData schemaUrl="http://schema.ymnb.jp/v1/schema.kml"></SchemaData>`
          context.report({
            node: node as unknown as TSESTree.Node,
            messageId: 'requireDataElement',
            fix: (fixer) => {
              if (extendedData.length > 0) {
                extendedData.append(tag)
              } else {
                $('Placemark').append(`<ExtendedData>${tag}</ExtendedData>`)
              }
              return fixer.replaceText(
                node as unknown as TSESTree.Node,
                $.html({ decodeEntities: false })
              )
            },
          })
        }
      },
    }),
  }
