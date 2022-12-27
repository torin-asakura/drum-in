import React                         from 'react'
import { FC }                        from 'react'
import { FormattedMessage }          from 'react-intl'
import { useEffect }                 from 'react'
import { useState }                  from 'react'

import { Navigation as NNavigation } from '@shared/data'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Box }                       from '@ui/layout'
import { NextLink }                  from '@ui/link'
import { Text }                      from '@ui/text'
import { useMockedNavigation }       from '@shared/data'

import { Element }                   from './element'
import { ElementsProps }             from './elements.interfaces'
import { getUi }                     from '../helpers'

const Elements: FC<ElementsProps> = ({ stateHover }) => {
  const { navigation: navigationData } = useMockedNavigation()
  const [navigation, setNavigation] = useState<NNavigation[]>([])

  useEffect(() => {
    setNavigation(navigationData)
    // eslint-disable-next-line
  }, [])

  return (
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
        {navigation.map(({
          title,
          level,
          quantityVideoLessons,
          circleFirstLine,
          circleSecondLine,
          quantityMonths,
          textMonths,
          itemId,
        }) => (
          <>
            <Element
              stateHover={stateHover}
              title={title}
              level={level}
              levelBackground={getUi(itemId).levelBackground}
              squareRotate={getUi(itemId).squareRotate}
              squarePositionX={getUi(itemId).squarePositionX}
              squarePositionY={getUi(itemId).squarePositionY}
              quantityVideoLessons={quantityVideoLessons}
              rectangleRotate={getUi(itemId).rectangleRotate}
              rectanglePositionX={getUi(itemId).rectanglePositionX}
              rectanglePositionY={getUi(itemId).rectanglePositionY}
              quantityMonths={quantityMonths}
              textMonths={textMonths}
              rectangleColor={getUi(itemId).rectangleColor}
              circlePositionX={getUi(itemId).circlePositionX}
              circlePositionY={getUi(itemId).circlePositionY}
              circleFirstLine={circleFirstLine}
              circleSecondLine={circleSecondLine}
            />
            <Layout flexBasis={16} />
          </>
        ))}
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
}

export { Elements }
