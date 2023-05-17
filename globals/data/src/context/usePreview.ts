import { useQuery }    from '@apollo/client'

import { GET_PREVIEW } from '../queries'

const usePreview = (previewUrl: string) => {
  const { data } = useQuery(GET_PREVIEW, { variables: { uri: `/${previewUrl}/` } })

  let preview

  if (data) {
    preview = data?.mediaItemBy.sourceUrl
  }

  return { preview }
}

export { usePreview }
