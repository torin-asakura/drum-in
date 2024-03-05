import { useQuery }   from '@apollo/client'

import { normalizer } from '@globals/data'

import { GET_FAQ }    from './faq.query'

const useFaq = () => normalizer(useQuery(GET_FAQ)?.data ?? [])

export { useFaq }
