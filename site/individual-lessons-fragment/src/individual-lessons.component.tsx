import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Button }  from '@ui/button'
import { Text }      from '@ui/text'

import messages    from './messages'

const IndividualLessons: FC = () => {
  const intl = useIntl()
  return (
    <Box
      width={['320px', '320px', '1440px']}
      height={['390px', '390px', '581px']}
      backgroundColor='dullBlack'
    >
      <Row justifyContent='center' display={['none', 'none', 'flex']}>
        <Layout flexBasis={138} flexShrink={0} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={60} />
          <Layout>
            <Text color='white' fontSize='large' fontWeight='bold' lineHeight='semiNormal'>
              {intl.formatMessage(messages.individualLessonsHeader)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
          <Layout width='570px' height='313px'>
            <Text color='white' fontWeight='semiBold' fontSize='normal' lineHeight='huge'>
              {intl.formatMessage(messages.individualLessonsContent)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Button size='big' width='426px'>
              <Text>{intl.formatMessage(messages.signUp)} </Text>{' '}
            </Button>
          </Layout>
          <Layout flexBasis={60} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
        <Column>
          <Layout flexBasis={60} />
          <Layout width='538px' height='500px' style={{ border: '1px solid white' }}>
            video
          </Layout>
          <Layout flexBasis={20} />
        </Column>
        <Layout flexBasis={118} flexShrink={0} />
      </Row>
      <Column width='100%' alignItems='center' display={['flex', 'flex', 'none']}>
        <Box width='320px' height='290px' justifyContent='center'>
          <Layout flexBasis={20} flexShrink={0} />
          <Column>
            <Layout flexBasis={25} flexShrink={0} />
            <Layout>{intl.formatMessage(messages.individualLessonsHeader)}</Layout>
            <Layout>{intl.formatMessage(messages.individualLessonsContent)}</Layout>
            <Layout flexBasis={25} flexShrink={0} />
          </Column>
          <Layout flexBasis={20} flexShrink={0} />
        </Box>
        <Layout flexBasis={60} />
        <Layout>
          <Button size='normal' width='426px'>
            <Text>{intl.formatMessage(messages.signUp)} </Text>{' '}
          </Button>
        </Layout>
      </Column>
    </Box>
  )
}

export { IndividualLessons }
