/* eslint-disable no-extra-boolean-cast */

import { IndividualCourseDataProps } from '@globals/data'
import { MainCourseDataProps }       from '@globals/data'
import React                         from 'react'
import { FC }                        from 'react'
import { FormattedMessage }          from 'react-intl'
import { useState }                  from 'react'
import { useIntl }                   from 'react-intl'

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

export interface IndividualCourseItemsProps{
  individualCoursesData?: MainCourseDataProps | IndividualCourseDataProps | null
  stateHover:boolean
}


export const IndividualCourseItems:FC<IndividualCourseItemsProps> = ({individualCoursesData,stateHover}) => {

  const { formatMessage } = useIntl()

  const getCircleSecondLineValue = (item) => {
    const liveBroadcastCount = parseInt(item?.individualCourseData?.price?.liveTrainingsNumber, 10)
    return !!liveBroadcastCount ? (
      <FormattedMessage
        id='course.price.plural_format_live_broadcast'
        values={{ liveBroadcastCount }}
      />
    ) : null
  }

  return(
    <>
        { individualCoursesData?.map((item) => (
          <React.Fragment key={item?.title}>
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
              levelBackground={getUi(item?.id)?.levelBackground}
              squareRotate={getUi(item?.id)?.squareRotate}
              squarePositionX={getUi(item?.id)?.squarePositionX}
              squarePositionY={getUi(item?.id)?.squarePositionY}
              quantityVideoLessons={item?.individualCourseData?.price?.videoTrainingsNumber}
              rectangleRotate={getUi(item?.id)?.rectangleRotate}
              rectanglePositionX={getUi(item?.id)?.rectanglePositionX}
              rectanglePositionY={getUi(item?.id)?.rectanglePositionY}
              quantityMonths={item?.individualCourseData?.price?.courseLengthInMonths}
              rectangleColor={getUi(item?.id)?.rectangleColor}
              circlePositionX={getUi(item?.id)?.circlePositionX}
              circlePositionY={getUi(item?.id)?.circlePositionY}
              circleFirstLine={item?.individualCourseData?.price?.liveTrainingsNumber}
              circleSecondLine={
                item?.individualCourseData?.price?.bonuses || getCircleSecondLineValue(item)
              }
              path={item?.content?.path}
            />
            <Layout flexBasis={16} />
          </React.Fragment>
        ))}

    </>
  )
}

export interface MainCourseItemProps{
  mainCourseData?: MainCourseDataProps | IndividualCourseDataProps | null
  stateHover:boolean
}

export const MainCourseItem:FC<MainCourseItemProps> = ({mainCourseData,stateHover}) => {



  const countLevel = mainCourseData?.content?.price.details.levelsNumber
  const mainCourseId = mainCourseData?.id

  return(
    <Element
      stateHover={stateHover}
      title={mainCourseData?.title}
      squareRotate={getUi(mainCourseId)?.squareRotate}
      squarePositionX={getUi(mainCourseId)?.squarePositionX}
      squarePositionY={getUi(mainCourseId)?.squarePositionY}
      quantityVideoLessons={mainCourseData?.content.price.details.videoTrainingsNumber}
      rectangleRotate={getUi(mainCourseId)?.rectangleRotate}
      rectanglePositionX={getUi(mainCourseId)?.rectanglePositionX}
      rectanglePositionY={getUi(mainCourseId)?.rectanglePositionY}
      quantityMonths={mainCourseData?.content.price.details.monthsNumber}
      rectangleColor={getUi(mainCourseId)?.rectangleColor}
      circlePositionX={getUi(mainCourseId)?.circlePositionX}
      circlePositionY={getUi(mainCourseId)?.circlePositionY}
      circleFirstLine={mainCourseData?.content.price.details.levelsNumber}
      circleSecondLine={
        <FormattedMessage id='course.price.plural_format_level' values={{ countLevel }} />
      }
      path={mainCourseData?.content?.path}
    />
  )
}


const Elements: FC<ElementsProps> = ({ list, stateHover }) => {

  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const mainCourseData = list?.items?.nodes.find(
    (el) => el.id === CourseID.OPENING_RHYTHM
  )

  const individualCoursesData = list?.items?.nodes.filter(
    (el) => el.id !== CourseID.OPENING_RHYTHM
  )



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
            {list?.title}
          </Text>
        </Box>
        <Layout display={['flex', 'flex', 'none']} flexBasis={[20, 24, 0]} />
        <MainCourseItem mainCourseData={mainCourseData} stateHover={stateHover}/>
        <Layout flexBasis={16} />
        <IndividualCourseItems individualCoursesData={individualCoursesData} stateHover={stateHover} />
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
