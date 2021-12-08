import NextApp           from 'next/app'
import React             from 'react'
import compose           from 'recompose/compose'
import { withApollo }    from '@atls/next-app-with-apollo'
import { withHelmet }    from '@atls/next-app-with-helmet'
import { withEmotion }   from '@atls/next-app-with-emotion'
import { ThemeProvider } from '@ui/theme'

export const withProviders = compose(
  withApollo({
    uri: process.env.WP_ENDPOINT || 'https://misik.pro/graphql',
    onUnauthenticated: () => {},
  }),

  withHelmet()
)

const App = (props) => {
  const WithProviders = withProviders(NextApp)
  return (
    <ThemeProvider>
      <WithProviders {...props} />
    </ThemeProvider>
  )
}

export default App
