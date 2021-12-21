import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const ExperienceMobile: FC = () => {
  const intl = useIntl()
  const content = [
    messages.experienceHeader,
    messages.firstAlbum,
    messages.concerts,
    messages.orchestra,
  ]
  return (
    <Column>
      {content.map((item) => (
        <>
          <Layout>
            <Text color='dullBlack' lineHeight='normal' fontWeight='normal' fontSize='regular'>
              {intl.formatMessage(item)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
        </>
      ))}
    </Column>
  )
}

export { ExperienceMobile }
