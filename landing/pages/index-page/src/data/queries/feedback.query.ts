import { gql }       from '@apollo/client'

import { getClient } from '@globals/data'

const GET_FEEDBACK = gql`
  query GetFeedback {
    contacts {
      nodes {
        contentAddons {
          role
          title
          content
          highlightedtext
        }
        language {
          code
        }
      }
    }
  }
`

const runFeedbackQuery = async () => {
  const client = getClient()

  const { data: feedbackData } = await client.query({
    query: GET_FEEDBACK,
  })

  if (feedbackData) {
    return {
      feedback: {
        RU: feedbackData.contacts.nodes.filter(
          (feedbackFragment) => feedbackFragment.language.code === 'RU'
        ),
        EN: feedbackData.contacts.nodes.filter(
          (feedbackFragment) => feedbackFragment.language.code === 'EN'
        ),
      },
    }
  }

  return { feedback: { RU: [], EN: [] } }
}

export { runFeedbackQuery }
