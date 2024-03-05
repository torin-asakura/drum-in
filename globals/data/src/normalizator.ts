const normalizeString = (string) =>
  string
    ?.replace(/(<p>|<\/p>)/g, '')
    .replace(/(<ol>|<\/ol>)/g, '')
    .replace(/(<li>|<\/li>)/g, '')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#8217;/g, '')
    .replace(/<meta charset="utf-8">/g, '')
    .replace(/<br\/>/g, '')
    .replace(/<br \/>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/(<strong>|<\/strong>)/g, '')

const validateField = (field) =>
  typeof field === 'string'
    ? {
        handle: (cb) => cb(true),
      }
    : { handle: (cb) => cb(false) }

const fragmentLevelReducer = (result, [key, value]) => ({
  ...result,
  [key]: validateField(value).handle((res) => (res ? normalizeString(value) : value)),
})

const languageLevelReducer = (result, [key, value]) => ({
  ...result,
  [key]: value.map((fragment) => Object.entries(fragment).reduce(fragmentLevelReducer, {})),
})

const scopeLevelReducer = (result, [key, value]) => ({
  ...result,
  [key]: Object.entries(value).reduce(languageLevelReducer, {}),
})

const normalize = (fragments) => Object.entries(fragments).reduce(scopeLevelReducer, {})

export { normalize, normalizeString }
