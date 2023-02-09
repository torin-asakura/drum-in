import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter }        from 'next/router'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Content }          from './content'
import { getUi }            from './helpers'

const PriceBlock = () => {
  const router = useRouter()

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%' alignItems={['start', 'start', 'center']}>
          <Layout flexBasis={[24, 72, 120]} />
          <Box>
            <Text
              textAlign={['left', 'left', 'center']}
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'increased', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_price.tuition_fees'
                defaultMessage='стоимость обучения'
              />
            </Text>
          </Box>
          <Layout flexBasis={[24, 44, 64]} />
          <Content type={getUi(router.route)} />
          <Layout flexBasis={[24, 32, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}
export { PriceBlock }
