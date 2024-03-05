import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_SERVICES = gql`
  query GetMainServices {
    mainServices {
      nodes {
        contentAddons {
          image {
            altText
            sourceUrl
          }
          title
          content
          highlightedtext
          role
        }
        language {
          code
        }
      }
    }
  }
`

const runServicesQuery = async () => {
  const client = getClient()

  const { data: servicesData } = await client.query({
    query: GET_SERVICES,
  })

  if (servicesData) {
    return {
      services: {
        RU: servicesData.mainServices.nodes.filter(
          (servicesFragment) => servicesFragment.language.code === 'RU'
        ),
        EN: servicesData.mainServices.nodes.filter(
          (servicesFragment) => servicesFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { services: { RU: [], EN: [] } }
}

export { runServicesQuery }
