import { useQuery } from '@apollo/client'

import { GET_SEO }  from '../../queries'
import { PageID }   from '../../query.constants'

export const useSeo = (id: PageID) => {
  const { data } = useQuery(GET_SEO, { variables: { id } })

  return data?.page?.seo
}
