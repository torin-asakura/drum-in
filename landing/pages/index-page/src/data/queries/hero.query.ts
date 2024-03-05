import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_HERO = gql`
  query GetHero {
    heroItems {
      nodes {
        contentAddons {
          content
          highlightedtext
          image {
            altText
            sourceUrl
          }
          role
          order
        }
        language {
          code
        }
      }
    }
  }
`

const runHeroQuery = async () => {
  const client = getClient()

  const { data: heroData } = await client.query({
    query: GET_HERO,
  })

  if (heroData) {
    return {
      hero: {
        RU: heroData.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'RU'),
        EN: heroData.heroItems.nodes.filter((heroFragment) => heroFragment.language.code === 'EN'),
      },
    }
  }

  return { hero: { RU: [], EN: [] } }
}

export { runHeroQuery }
