import React                            from 'react'
import { FC }                           from 'react'
import { FormattedMessage }             from 'react-intl'
import { useState }                     from 'react'
import { useIntl }                      from 'react-intl'

import { ModalFormFeelingOfTime }       from '@landing/modal-form-feeling-of-time'
import { ModalMobileFormFeelingOfTime } from '@landing/modal-form-feeling-of-time'
import { Button }                       from '@ui/button'
import { Box }                          from '@ui/layout'
import { Column }                       from '@ui/layout'
import { Layout }                       from '@ui/layout'
import { Space }                        from '@ui/text'
import { Text }                         from '@ui/text'

import { ContentProps }                 from './content.interfaces'
import { Figures }                      from './figures'
import { FullPrice }                    from './full-price'
import { ShortCourseContentList }       from './short-course-content-list'
import { Title }                        from './title'

const Content: FC<ContentProps> = ({ feelingOfTimeData }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const { formatMessage } = useIntl()

  const fullPrice = `
    ${formatMessage({ id: 'course.price.full_course_for' })}
    ${feelingOfTimeData?.individualCourseData?.price?.fullPrice}
    ${formatMessage({ id: 'currency.ruble' })}
    `

  const liveBroadcastCount = parseInt(
    feelingOfTimeData?.individualCourseData?.price?.liveTrainingsNumber || '',
    10
  )

  return (
    <Box
      backgroundColor='background.smokyWhite'
      borderRadius='bigger'
      width={['100%', '100%', '100%']}
      position='relative'
    >
      <Layout flexBasis={24} flexShrink={0} />
      <Column alignItems={['start', 'start', 'center']} width='100%'>
        <Layout flexBasis={[40, 80, 120]} />
        <Title
          currency={feelingOfTimeData?.individualCourseData?.price?.monthlyPrice}
          costPerMonth={formatMessage({
            id: 'landing_price.rubles_per_month',
          })}
        />
        <Layout flexBasis={[40, 50, 32]} />
        <ShortCourseContentList feelingOfTimeData={feelingOfTimeData} />

        <Box display={['none', 'none', 'flex']} width={514}>
          <Button
            size='withoutPaddingBigHeight'
            variant='purpleBackground'
            fill
            onClick={() => setVisibleModal(true)}
          >
            <Text fontWeight='semiBold' fontSize='large' textTransform='uppercase'>
              <FormattedMessage id='landing_price.arrange_an_installment_plan' />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[44, 70, 96]} />
        <FullPrice feelingOfTimeData={feelingOfTimeData} fullCost={fullPrice} />
        <Layout flexBasis={[16, 18, 20]} />
        <Box>
          <Text
            display='inline'
            fontWeight='medium'
            fontSize={['micro', 'semiMedium', 'medium']}
            lineHeight={['primary', 'primary', 'medium']}
            color='text.gray'
          >
            <FormattedMessage id='landing_price.with_a_one_time_payment_of_the_course_you_save' />
            <Space />
            <Text color='text.green'>
              {feelingOfTimeData?.individualCourseData?.price?.discount}
            </Text>
          </Text>
        </Box>
        <Layout flexBasis={[24, 32, 0]} display={['flex', 'flex', 'none']} />
        <Box display={['none', 'flex', 'none']} width='100%'>
          <Button
            size='withoutPaddingMediumHeight'
            variant='purpleBackground'
            fill
            onClick={() => setVisibleModal(true)}
          >
            <Text fontWeight='semiBold' fontSize='micro' textTransform='uppercase'>
              {feelingOfTimeData?.individualCourseData?.price?.monthlyPrice}
              <Space />
              <FormattedMessage id='landing_price.rubles_per_month' />
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none', 'none']} width='100%'>
          <Button
            size='withoutPaddingMediumHeight'
            variant='purpleBackground'
            fill
            onClick={() => setVisibleModalMobile(true)}
          >
            <Text fontWeight='semiBold' fontSize='micro' textTransform='uppercase'>
              {feelingOfTimeData?.individualCourseData?.price?.monthlyPrice}
              <Space />
              <FormattedMessage id='landing_price.rubles_per_month' />
            </Text>
          </Button>
        </Box>
        <ModalFormFeelingOfTime
          feelingOfTimeData={feelingOfTimeData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormFeelingOfTime
          feelingOfTimeData={feelingOfTimeData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
        <Layout flexBasis={[23, 48, 74]} />
        <Figures
          quantityMonths={feelingOfTimeData?.individualCourseData?.price?.courseLengthInMonths}
          quantityVideoLessons={
            feelingOfTimeData?.individualCourseData?.price?.videoTrainingsNumber
          }
          firstLineCircle={feelingOfTimeData?.individualCourseData?.price?.liveTrainingsNumber}
          secondLineCircle={
            <FormattedMessage
              id='course.price.plural_format_live_broadcast'
              values={{ liveBroadcastCount }}
            />
          }
          rectangleRotate={-20}
          circleRotate={20}
          squareRotate={-20}
          rectanglePositionX={3.5}
          rectanglePositionY={54}
          backgroundRectangle='transparentBlueGradient'
        />
        <Layout flexBasis={[0, 0, 110, 50]} />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}
export { Content }
