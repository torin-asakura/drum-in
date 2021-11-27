import App            from 'next/app'
import compose        from 'recompose/compose'
import { withApollo } from '@atls/next-app-with-apollo'
import { withHelmet } from '@atls/next-app-with-helmet'
import { withEmotion }   from '@atls/next-app-with-emotion'
import { ThemeProvider } from '@ui/theme'

export const withProviders = compose(
  withApollo({
    uri: process.env.WP_ENDPOINT || 'https://misik.pro/graphql',
    onUnauthenticated: () => {},
  }),
  withEmotion({
    Provider: ThemeProvider,
  }),
  withHelmet()
)

export default withProviders(App)
