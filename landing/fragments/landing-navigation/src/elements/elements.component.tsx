import React                         from 'react'
import { FC }                        from 'react'
import { FormattedMessage }          from 'react-intl'
import { useEffect }                 from 'react'
import { useState }                  from 'react'

import { ModalForms }                from '@landing/modal-forms'
import { ModalMobileForms }          from '@landing/modal-forms'
import { Navigation as NNavigation } from '@shared/data'
import { Button }                    from '@ui/button'
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
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

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
          path,
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
              path={path}
            />
            <Layout flexBasis={16} />
          </>
        ))}
        <Layout display={['flex', 'flex', 'none']} flexBasis={[60, 50, 0]} />
        <Box display={['flex', 'flex', 'none']}>
          <NextLink path='/contact'>
            <Text
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
            >
              <FormattedMessage id='landing_header.contacts' defaultMessage='Контакты' />
            </Text>
          </NextLink>
        </Box>
        <Layout display={['flex', 'flex', 'none']} flexBasis={16} />
        <Box display={['none', 'flex', 'none']}>
          <Button
            size='withoutPaddingMicroHeight'
            variant='transparentBackground'
            onClick={() => setVisibleModal(true)}
          >
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
              lineHeight='default'
            >
              <FormattedMessage id='landing_header.connect' defaultMessage='Связаться' />
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none', 'none']}>
          <Button
            size='withoutPaddingMicroHeight'
            variant='transparentBackground'
            onClick={() => setVisibleModalMobile(true)}
          >
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
              lineHeight='default'
            >
              <FormattedMessage id='landing_header.connect' defaultMessage='Связаться' />
            </Text>
          </Button>
        </Box>
        <ModalForms activeRender={visibleModal} onClose={() => setVisibleModal(false)} />
        <ModalMobileForms
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </Column>
    </Row>
  )
}

export { Elements }
