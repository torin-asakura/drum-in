import { useQuery } from '@apollo/client'

import { GET_HERO } from './hero.query'

const useHero = () => useQuery(GET_HERO).data?.courseFifthDimensionItem.backgroundForHero || []

export { useHero }
