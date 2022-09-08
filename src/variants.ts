const aliasList = Object.entries({
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator
  '>': ['children', 'child'],
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator
  ' ': ['heir', 'descendant'],
  // https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator
  '~': ['sibling', 'twin'],
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator
  '+': ['next']
})

const placeholderElements = ['view', 'text']
// https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
const elements = [
  // general selector
  '',
  ...placeholderElements
]

type AddVariantParams = [string, string | string[]]

export const variants = elements.map((element) => {
  return aliasList.map<AddVariantParams[]>(([selector, aliases]) => {
    return aliases.map<AddVariantParams>((alias) => {
      const variant = alias + (element ? `-${element}` : '')
      const base =
        `& ${selector} ` + element
          ? `${element}::not(.not-${variant})`
          : placeholderElements
            .map((element) => `${element}::not(.not-${variant})`)
            .join(',')
      const added = {
        '~': `&:not(.not-${variant})`,
        ' ':
          `& ${selector}` +
          ` ${placeholderElements.map(
            (x) => `${x}:not(.not-${variant}) ${element}`
          ).join(',')}`
      }[selector]

      return [variant, added ? [base, added] : base]
    })
  })
})

export function each (cb: (params: AddVariantParams) => void) {
  variants.forEach((v) => {
    v.forEach((x) => {
      x.forEach((y) => {
        cb(y)
      })
    })
  })
}
