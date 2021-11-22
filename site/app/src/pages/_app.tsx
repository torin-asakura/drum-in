import App               from 'next/app'
import compose           from 'recompose/compose'
import { withApollo }    from '@atls/next-app-with-apollo'
import { withHelmet }    from '@atls/next-app-with-helmet'

export const withProviders = compose(
  withApollo({
    uri: process.env.WP_ENDPOINT || 'https://misik.pro/graphql',
    onUnauthenticated: () => {},
  }),
  withHelmet()
)

export default withProviders(App)
