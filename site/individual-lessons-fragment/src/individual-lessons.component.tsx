import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import messages    from './messages'

const IndividualLessons: FC = () => {
  const intl = useIntl()
  return (
    <Box
      width={['320px', '320px', '1440px']}
      height={['390px', '390px', '581px']}
      border='1px solid black'
    >
      <Row
        justifyContent='center'
        display={['none', 'none', 'flex']}
        style={{ border: '1px solid black' }}
      >
        <Layout flexBasis={138} flexShrink={0} />
        <Column width='100%' style={{ border: '1px solid black' }} alignItems='center'>
          <Layout flexBasis={60} />
          <Layout> {intl.formatMessage(messages.individualLessonsHeader)}</Layout>
          <Layout flexBasis={20} />
          <Layout width='570px' height='313px' style={{ border: '1px solid black' }}>
            {intl.formatMessage(messages.individualLessonsContent)}
          </Layout>
          <Layout flexBasis={20} />
          <Layout>{intl.formatMessage(messages.signUp)}</Layout>
          <Layout flexBasis={60} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
        <Column style={{ border: '1px solid black' }}>
          <Layout flexBasis={60} />
          <Layout style={{ border: '1px solid black' }} width='538px' height='500px'>
            video
          </Layout>
          <Layout flexBasis={20} />
        </Column>
        <Layout flexBasis={118} flexShrink={0} />
      </Row>
      <Column
        width='100%'
        alignItems='center'
        display={['flex', 'flex', 'none']}
        style={{ border: '1px solid black' }}
      >
        <Box
          style={{ border: '1px solid black' }}
          width='320px'
          height='290px'
          justifyContent='center'
        >
          <Layout flexBasis={20} flexShrink={0} />
          <Column>
            <Layout flexBasis={25} flexShrink={0} />
            <Layout style={{ border: '1px solid black' }}>
              {' '}
              {intl.formatMessage(messages.individualLessonsHeader)}
            </Layout>
            <Layout style={{ border: '1px solid black' }}>
              {' '}
              {intl.formatMessage(messages.individualLessonsContent)}
            </Layout>
            <Layout flexBasis={25} flexShrink={0} />
          </Column>
          <Layout flexBasis={20} flexShrink={0} />
        </Box>
        <Layout flexBasis={60} />
        <Layout style={{ border: '1px solid black' }}>
          {' '}
          {intl.formatMessage(messages.signUp)}
        </Layout>
      </Column>
    </Box>
  )
}

export { IndividualLessons }
