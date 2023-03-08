import { ApolloClient }  from '@apollo/client'
import { InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: 'https://wp.drumin.pro/graphql',
    cache: new InMemoryCache(),
  })
