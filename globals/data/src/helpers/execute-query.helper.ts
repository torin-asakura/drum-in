import { useQuery } from '@apollo/client'

const executeQuery = (QUERY) => {
  const { data, error } = useQuery(QUERY)

  if (error) {
    throw new Error(error.message)
  }

  return data
}

export { executeQuery }
