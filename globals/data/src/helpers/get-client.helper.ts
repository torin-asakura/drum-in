import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

import { WP_URI }        from './client.constants'

export const getClient = () =>
  new ApolloClient({
    uri: WP_URI,
    cache: new InMemoryCache(),
  })
