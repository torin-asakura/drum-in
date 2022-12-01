import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { ElementProps }     from './element.interfaces'
import { FifthElement }     from './fifth-element'
import { FirstElement }     from './first-element'
import { FourthElement }    from './fourth-element'
import { SecondElement }    from './second-element'
import { SixthElement }     from './sixth-element'
import { ThirdElement }     from './third-element'

const Elements: FC<ElementProps> = ({ stateHover }) => (
  <Row>
    <Column width='100%'>
      <Box display={['flex', 'flex', 'none']}>
        <Text
          textTransform='uppercase'
          fontWeight='semiBold'
          fontSize={['semiMedium', 'medium', 'medium']}
          lineHeight='default'
          color='gray'
        >
          <FormattedMessage id='landing_header.courses' defaultMessage='Курсы' />
        </Text>
      </Box>
      <Layout display={['flex', 'flex', 'none']} flexBasis={[20, 24, 0]} />
      <FirstElement stateHover={stateHover} />
      <Layout flexBasis={[12, 14, 16]} />
      <SecondElement stateHover={stateHover} />
      <Layout flexBasis={[12, 14, 16]} />
      <ThirdElement stateHover={stateHover} />
      <Layout flexBasis={[12, 14, 16]} />
      <FourthElement stateHover={stateHover} />
      <Layout flexBasis={16} />
      <FifthElement stateHover={stateHover} />
      <Layout flexBasis={16} />
      <SixthElement stateHover={stateHover} />
      <Layout display={['flex', 'flex', 'none']} flexBasis={[60, 50, 0]} />
      <Box display={['flex', 'flex', 'none']}>
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiModerate', 'big']}
          >
            <FormattedMessage id='landing_header.contacts' defaultMessage='Контакты' />
          </Text>
        </NextLink>
      </Box>
      <Layout display={['flex', 'flex', 'none']} flexBasis={16} />
      <Box display={['flex', 'flex', 'none']}>
        <NextLink path='/'>
          <Text
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['medium', 'semiModerate', 'big']}
          >
            <FormattedMessage id='landing_header.connect' defaultMessage='Связаться' />
          </Text>
        </NextLink>
      </Box>
    </Column>
  </Row>
)

export { Elements }
