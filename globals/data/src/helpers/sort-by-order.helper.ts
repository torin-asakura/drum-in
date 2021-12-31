const sortByOrder = (nodes: any[]): any[] => {
  return [...nodes].sort((a, b) => {
    if (a.addons.order > b.addons.order) {
      return 1
    }

    if (a.addons.order < b.addons.order) {
      return -1
    }

    return 0
  })
}

export { sortByOrder }
