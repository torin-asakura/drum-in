import Document       from 'next/document'
import compose        from 'recompose/compose'
import { withIcons }  from '@atls/next-document-with-icons'
import { withHelmet } from '@atls/next-document-with-helmet'

const withProviders = compose(
  // withOpenGraph({ image: '' }),
  withIcons(),
  withHelmet()
  // TODO add gtag
  // withGtag(process.env.GA_TRACKING_ID || 'GTM-TPXQGZP')
)

export default withProviders(Document)
