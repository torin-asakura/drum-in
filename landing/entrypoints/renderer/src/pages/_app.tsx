import * as messages        from '../../locales/ru.json'

import { ApolloProvider }   from '@apollo/client'

import React                from 'react'
import { IntlProvider }     from 'react-intl'

import { GoogleTagManager } from '@landing/google-tag-manager'
import { ThemeProvider }    from '@ui/theme'
import { useApollo }        from '@globals/data'

const App = ({ Component, pageProps, ...props }) => {
  const client = useApollo(pageProps)

  return (
    <ApolloProvider client={client}>
      <IntlProvider messages={messages} locale='ru' defaultLocale='ru'>
        <ThemeProvider>
          <GoogleTagManager>
            <Component {...pageProps} {...props} />
          </GoogleTagManager>
        </ThemeProvider>
      </IntlProvider>
    </ApolloProvider>
  )
}

export default App
