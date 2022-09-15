import twPlugin from 'tailwindcss/plugin.js'
import { each, variants, createVariants } from './variants'
import type { UserDefinedOptions } from './types'
export const plugin = twPlugin(({ addVariant }) =>
  each(variants, (x) => {
    addVariant(...x)
  })
)

export function createPlugin (options: UserDefinedOptions) {
  const variants = createVariants(options)
  return twPlugin(({ addVariant }) =>
    each(variants, (x) => {
      addVariant(...x)
    })
  )
}
