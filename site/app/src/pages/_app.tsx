import NextApp            from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient }   from '@apollo/client'
import { InMemoryCache }  from '@apollo/client'
import React              from 'react'
import compose            from 'recompose/compose'
import { withHelmet }     from '@atls/next-app-with-helmet'
import { withIntl }       from '@monstrs/next-app-with-intl'
import { ThemeProvider }  from '@ui/theme'

export const withProviders = compose(
  withIntl({
    default: 'ru',
  }),
  withHelmet()
)

const App = (props) => {
  const WithProviders = withProviders(NextApp)

  const client = new ApolloClient({
    uri: process.env.WP_ENDPOINT || 'https://wp.drumin.pro/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <WithProviders {...props} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
