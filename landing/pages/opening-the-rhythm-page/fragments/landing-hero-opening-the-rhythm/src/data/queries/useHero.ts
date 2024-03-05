import { useQuery } from '@apollo/client'

import { GET_HERO } from './hero.query'

const useHero = () => useQuery(GET_HERO).data?.course.details.hero.backgrounddesktop ?? []

export { useHero }
