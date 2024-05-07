import { APOLLO_STATE_PROP_NAME } from '../client.constants'
import { UseApollo }              from './use-apollo.interfaces'
import { initializeApollo }       from '../initialize-apollo'

export const useApolloOnServer: UseApollo = (pageProps) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  return initializeApollo({ initialState: state })
}
