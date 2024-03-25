/* eslint-disable no-extra-boolean-cast */

import React                  from 'react'
import { FC }                 from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'
import { useIntl }            from 'react-intl'

import { CourseID }           from '@globals/data'
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
import { getUi }              from '../helpers'

const Elements: FC<ElementsProps> = ({ headerData, stateHover }) => {
  const { formatMessage } = useIntl()

  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const course = headerData?.dropdownList.items.nodes.find(
    (el) => el.id === CourseID.OPENING_RHYTHM
  )
  const individualCourses = headerData?.dropdownList.items.nodes.filter(
    (el) => el.id !== CourseID.OPENING_RHYTHM
  )

  const countLevel = course?.content.price.details.levelsNumber

  const getCircleSecondLineValue = (item) => {
    const countLiveBroadcast = parseInt(item?.individualCourseData?.price?.liveTrainingsNumber, 10)
    return !!countLiveBroadcast ? (
      <FormattedMessage
        id='course.price.plural_format_live_broadcast'
        values={{ countLiveBroadcast }}
      />
    ) : null
  }

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
            {headerData?.dropdownList.title}
          </Text>
        </Box>
        <Layout display={['flex', 'flex', 'none']} flexBasis={[20, 24, 0]} />

        <Element
          stateHover={stateHover}
          title={course?.title}
          squareRotate={getUi(course.id)?.squareRotate}
          squarePositionX={getUi(course.id)?.squarePositionX}
          squarePositionY={getUi(course.id)?.squarePositionY}
          quantityVideoLessons={course.content.price.details.videoTrainingsNumber}
          rectangleRotate={getUi(course.id)?.rectangleRotate}
          rectanglePositionX={getUi(course.id)?.rectanglePositionX}
          rectanglePositionY={getUi(course.id)?.rectanglePositionY}
          quantityMonths={course.content.price.details.monthsNumber}
          rectangleColor={getUi(course.id)?.rectangleColor}
          circlePositionX={getUi(course.id)?.circlePositionX}
          circlePositionY={getUi(course.id)?.circlePositionY}
          circleFirstLine={course.content.price.details.levelsNumber}
          circleSecondLine={
            <FormattedMessage id='course.price.plural_format_level' values={{ countLevel }} />
          }
          path={course.content.path}
        />
        <Layout flexBasis={16} />
        {individualCourses.map((item) => (
          <React.Fragment key={item.title}>
            <Element
              stateHover={stateHover}
              title={item?.title}
              level={
                item?.individualCourseData?.price?.level
                  ? `${formatMessage({ id: 'course.price.level' })} ${
                      item?.individualCourseData?.price?.level
                    }`
                  : null
              }
              levelBackground={getUi(item.id)?.levelBackground}
              squareRotate={getUi(item.id)?.squareRotate}
              squarePositionX={getUi(item.id)?.squarePositionX}
              squarePositionY={getUi(item.id)?.squarePositionY}
              quantityVideoLessons={item?.individualCourseData?.price?.videoTrainingsNumber}
              rectangleRotate={getUi(item.id)?.rectangleRotate}
              rectanglePositionX={getUi(item.id)?.rectanglePositionX}
              rectanglePositionY={getUi(item.id)?.rectanglePositionY}
              quantityMonths={item?.individualCourseData?.price?.courseLengthInMonths}
              rectangleColor={getUi(item.id)?.rectangleColor}
              circlePositionX={getUi(item.id)?.circlePositionX}
              circlePositionY={getUi(item.id)?.circlePositionY}
              circleFirstLine={item?.individualCourseData?.price?.liveTrainingsNumber}
              circleSecondLine={
                item?.individualCourseData?.price?.bonuses || getCircleSecondLineValue(item)
              }
              path={item?.content?.path}
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
