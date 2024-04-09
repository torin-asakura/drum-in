import { normalizeString } from '@globals/data'

const normalizer = (dataArray) =>
  dataArray.map(({ content, title, excerpt, ...item }) => ({
    ...item,
    title: normalizeString(title),
    content: normalizeString(content),
  }))

export { normalizer }
