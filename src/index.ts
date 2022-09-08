import plugin from 'tailwindcss/plugin.js'
import { each } from './variants'
export default plugin(({ addVariant }) =>
  each((x) => {
    addVariant(...x)
  })
)
