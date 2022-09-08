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

// https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html
const elements = [
  // general selector
  ''
]

type AddVariantParams = [string, string | string[]]

export const variants = elements.map((element) => {
  return aliasList.map<AddVariantParams[]>(([selector, aliases]) => {
    return aliases.map<AddVariantParams>((alias) => {
      const variant = alias + (element ? `-${element}` : '')
      const base = `:where(&) ${selector} ${element}:where(:not(.not-${variant}))`
      const added = {
        '~': `:where(&:not(.not-${variant}))`,
        ' ': `:where(&) ${selector} :where(:not(.not-${variant})) ${element}`
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
