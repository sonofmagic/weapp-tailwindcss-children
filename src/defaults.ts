import type { UserDefinedOptions } from './types'
import { aliasMap, defaultFallbackElementTags } from './constants'

export function getOptions (options: UserDefinedOptions = {}) {
  const fallbackElementTags =
    options.fallbackElements ?? defaultFallbackElementTags
  const aliasList = Object.entries(aliasMap)
  const elements = [
    // general selector
    '',
    ...fallbackElementTags
  ]

  return {
    aliasList,
    elements,
    fallbackElementTags
  }
}
