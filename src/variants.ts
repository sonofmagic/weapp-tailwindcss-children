import { getOptions } from './defaults'
import type { AddVariantParams, UserDefinedOptions } from './types'

export function createVariants (options: UserDefinedOptions = {}) {
  const { aliasList, elements, fallbackElementTags } = getOptions(options)
  const variants = elements.map((element) => {
    return aliasList.map<AddVariantParams[]>(([selector, aliases]) => {
      return aliases.map<AddVariantParams>((alias) => {
        const variant = alias + (element ? `-${element}` : '')
        const multiple = []
        if (element) {
          const base = ['&']
          selector !== ' ' && base.push(selector)
          base.push(`${element}:not(.not-${variant})`)
          multiple.push(base.join(' '))
        } else {
          for (let i = 0; i < fallbackElementTags.length; i++) {
            const e = fallbackElementTags[i]
            const base = ['&']
            selector !== ' ' && base.push(selector)
            base.push(`${e}:not(.not-${variant})`)
            multiple.push(base.join(' '))
          }
        }

        return [variant, multiple]
      })
    })
  })
  return variants
}

export const variants = createVariants()

export function each (
  variants: AddVariantParams[][][],
  cb: (params: AddVariantParams) => void
) {
  variants.forEach((v) => {
    v.forEach((x) => {
      x.forEach((y) => {
        cb(y)
      })
    })
  })
}
