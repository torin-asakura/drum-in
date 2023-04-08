import { useQuery } from '@apollo/client'

import { GET_HERO } from './hero.query'

const useHero = () => useQuery(GET_HERO).data?.courseConnacolItem.backgroundForHero || []

export { useHero }
