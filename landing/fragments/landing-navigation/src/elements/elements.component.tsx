import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'

import { Consultation }       from '@landing/consultation'
import { MobileConsultation } from '@landing/consultation'
import { Button }             from '@ui/button'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Box }                from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'

import { Element }            from './element'
import { ElementsProps }      from './elements.interfaces'
import { useNavigation }      from '../data'
import { getUi }              from '../helpers'

const Elements: FC<ElementsProps> = ({ stateHover }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const navigation = useNavigation()?.menuCourses?.nodes

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
            <FormattedMessage id='landing_header.courses' />
          </Text>
        </Box>
        <Layout display={['flex', 'flex', 'none']} flexBasis={[20, 24, 0]} />
        {navigation?.map(({ title, id, menuCourse }) => (
          <React.Fragment key={id}>
            <Element
              stateHover={stateHover}
              title={title}
              level={menuCourse.level}
              levelBackground={getUi(id).levelBackground}
              squareRotate={getUi(id).squareRotate}
              squarePositionX={getUi(id).squarePositionX}
              squarePositionY={getUi(id).squarePositionY}
              quantityVideoLessons={menuCourse.quantityVideoLessons}
              rectangleRotate={getUi(id).rectangleRotate}
              rectanglePositionX={getUi(id).rectanglePositionX}
              rectanglePositionY={getUi(id).rectanglePositionY}
              quantityMonths={menuCourse.quantityMonths}
              textMonths={menuCourse.textMonths}
              rectangleColor={getUi(id).rectangleColor}
              circlePositionX={getUi(id).circlePositionX}
              circlePositionY={getUi(id).circlePositionY}
              circleFirstLine={menuCourse.circleFirstLine}
              circleSecondLine={menuCourse.circleSecondLine}
              path={menuCourse.link}
            />
            <Layout flexBasis={16} />
          </React.Fragment>
        ))}
        <Layout display={['flex', 'flex', 'none']} flexBasis={[60, 50, 0]} />
        <Box display={['flex', 'flex', 'none']}>
          <NextLink path='/contact'>
            <Text
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
            >
              <FormattedMessage id='landing_header.contacts' />
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
              <FormattedMessage id='landing_header.connect' />
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
              <FormattedMessage id='landing_header.connect' />
            </Text>
          </Button>
        </Box>
        <Consultation activeRender={visibleModal} onClose={() => setVisibleModal(false)} />
        <MobileConsultation
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </Column>
    </Row>
  )
}

export { Elements }
