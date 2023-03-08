const extractObject = (object: string, fragments) =>
  fragments?.filter((fragment) => fragment.fragmentParams.object === object)[0] || undefined

export { extractObject }
