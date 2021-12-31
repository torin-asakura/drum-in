const clear = (string: string) =>
  string
    .replace(/(<p>|<\/p>)/g, '')
    .replace(/&#8211;/g, '-')
    .replace(/&#8212;/g, '-')
    .replace(/&#187;/g, '"')
    .replace(/&#171;/g, '"')
    .replace(/<meta charset="utf-8">/g, '')
    .replace(/<br\/>/g, '')
    .replace(/<br \/>/g, '')

const clearParagraphs = (objectPointer, props: string[]) => {
  let object = { ...objectPointer }
  for (const key in object) {
    if (props.indexOf(key) != -1) {
      object[key] = clear(object[key])
    }
  }

  return object
}

export { clearParagraphs }
