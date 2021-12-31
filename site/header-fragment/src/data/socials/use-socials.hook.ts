import { Query }       from '@globals/data'
import { extractUrl }  from '@globals/data'

import { GET_SOCIALS } from './socials.query'

const useSocials = () => {
  const query = new Query(GET_SOCIALS)
  const result = query.execute().name('socials').nodes().end()

  if (result) {
    return result.map((social) => ({
      content: social?.content,
      url: extractUrl(social?.socialsAddons?.blackIcon),
      alt: social?.socialsAddons?.blackIcon?.altText,
    }))
  }

  return []
}

export { useSocials }
