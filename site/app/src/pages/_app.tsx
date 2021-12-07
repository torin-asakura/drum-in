import NextApp           from 'next/app'
import React             from 'react'
import compose           from 'recompose/compose'
import { withApollo }    from '@atls/next-app-with-apollo'
import { withHelmet }    from '@atls/next-app-with-helmet'
import { ThemeProvider } from '@ui/theme'
import { IntlProvider }  from 'react-intl'

export const withProviders = compose(
  withApollo({
    uri: process.env.WP_ENDPOINT || 'https://misik.pro/graphql',
    onUnauthenticated: () => {},
  }),
  withHelmet()
)

const ThemeProvided = (props) => {
  const WithProviders = withProviders(NextApp)
  return (
    <ThemeProvider>
      <WithProviders {...props} />
    </ThemeProvider>
  )
}

const App = (props) => (
  <IntlProvider locale='ru'>
    <ThemeProvided {...props} />
  </IntlProvider>
)

export default App
