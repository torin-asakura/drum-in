export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_DATA_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/opening-the-rhythm')
    await res.revalidate('/feeling-of-time')
    await res.revalidate('/fifth-dimension')
    await res.revalidate('/seventh-heaven')
    await res.revalidate('/connacol')
    await res.revalidate('/polyrhythmic-keys')
    await res.revalidate('/contact')
    await res.revalidate('/privacy-policy')
    await res.revalidate('/contract-offer')

    return res.json({ revalidated: true })

  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
