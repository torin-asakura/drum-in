const extractUrl = (object): string => {
  if (object) {
    if (object.link) return object.link
    if (object.sourceUrl) return object.sourceUrl
    if (object.mediaItemUrl) return object.mediaItemUrl
  }
  return ''
}

export { extractUrl }
