import { Query }       from '@globals/data'

import { GET_REVIEWS } from './reviews.query'

const useReviews = () => {
  const query = new Query(GET_REVIEWS)
  return query.execute().name('reviews').nodes().end()
}

export { useReviews }
