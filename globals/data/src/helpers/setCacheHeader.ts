const setCacheHeader = (res, maxAge: number, staleWhileRevalidate: number) =>
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`
  )

export { setCacheHeader }
