import { useQuery } from '@apollo/client'

import { GET_FAQ }  from './faq.query'

const useFaq = () => useQuery(GET_FAQ)?.data ?? []

export { useFaq }
