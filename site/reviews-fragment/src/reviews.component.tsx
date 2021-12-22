import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Row }     from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from './messages'

const Reviews: FC = () => {
  const intl = useIntl()
  return (
    <Box
      width={['320px', '320px', '100%']}
      height={['240px', '240px', '430px']}
      justifyContent='center'
    >
      <Layout flexBasis={265} display={['none', 'none', 'flex']} />
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Column width='100%' display={['none', 'none', 'flex']}>
          <Layout>
            <Text color='black' fontWeight='bold' fontSize='large' lineHeight='normal'>
              {intl.formatMessage(messages.reviews)}
            </Text>
          </Layout>
          <Layout flexBasis={56} flexShrink={0} />
          <Row>
            <Layout width='527px' height='284px'>
              yotube player
            </Layout>
            <Layout flexBasis={400} flexShrink={0} />
            <Layout width='527px' height='284px'>
              yotube player
            </Layout>
          </Row>
          <Layout flexBasis={64} />
        </Column>
      </Layout>
      <Layout flexBasis={156} flexShrink={0} display={['none', 'none', 'flex']} />
      <Row display={['flex', 'flex', 'none']}>
        <Layout flexBasis={10} />
        <Column width='100%'>
          <Layout flexBasis={15} />
          <Row>
            <Layout flexBasis={35} flexShrink={0} />
            <Layout>
              <Text color='black' fontWeight='bold' fontSize='small' lineHeight='normal'>
                {intl.formatMessage(messages.reviews)}
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={15} />
          <Layout width={300} height={160}>
            youtube player
          </Layout>
          <Layout flexBasis={15} />
        </Column>
        <Layout flexBasis={10} />
      </Row>
    </Box>
  )
}

export { Reviews }
