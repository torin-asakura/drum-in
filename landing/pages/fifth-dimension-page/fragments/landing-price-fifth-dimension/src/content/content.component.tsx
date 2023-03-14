import React                             from 'react'
import { FormattedMessage }              from 'react-intl'
import { useState }                      from 'react'
import { useIntl }                       from 'react-intl'

import { ModalFormFifthDimension }       from '@landing/modal-form-fifth-dimension'
import { ModalMobileFormFifthDimension } from '@landing/modal-form-fifth-dimension'
import { Button }                        from '@ui/button'
import { Box }                           from '@ui/layout'
import { Column }                        from '@ui/layout'
import { Layout }                        from '@ui/layout'
import { Space }                         from '@ui/text'
import { Text }                          from '@ui/text'

import { Figures }                       from './figures'
import { FullPrice }                     from './full-price'
import { Specifications }                from './specifications'
import { Title }                         from './title'

const Content = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const { formatMessage } = useIntl()

  return (
    <Box
      backgroundColor='background.smokyWhite'
      borderRadius='bigger'
      width={['100%', 520, '100%']}
      position='relative'
    >
      <Layout flexBasis={24} flexShrink={0} />
      <Column alignItems={['start', 'start', 'center']} width='100%'>
        <Layout flexBasis={[40, 80, 120]} />
        <Title
          currency={formatMessage({
            id: 'landing_price_fifth_dimension.eight_thousand_seven_hundred',
            defaultMessage: '8 700',
          })}
          costPerMonth={formatMessage({
            id: 'landing_price_fifth_dimension.rubles_per_month',
            defaultMessage: '₽/мес',
          })}
        />
        <Layout flexBasis={[40, 50, 32]} />
        <Specifications
          quantityMonths={formatMessage({
            id: 'landing_price_fifth_dimension.four',
            defaultMessage: '4',
          })}
          quantityVideoLessons={formatMessage({
            id: 'landing_price_fifth_dimension.seventeen',
            defaultMessage: '17',
          })}
          firstLineCircle={formatMessage({
            id: 'landing_price_fifth_dimension.twenty',
            defaultMessage: '20',
          })}
          secondLineCircle={formatMessage({
            id: 'landing_price_fifth_dimension.live_broadcasts',
            defaultMessage: 'прямых эфиров',
          })}
        />
        <Box display={['none', 'none', 'flex']} width={514}>
          <Button
            size='withoutPaddingBigHeight'
            variant='purpleBackground'
            fill
            onClick={() => setVisibleModal(true)}
          >
            <Text fontWeight='semiBold' fontSize='large' textTransform='uppercase'>
              <FormattedMessage
                id='landing_price.arrange_an_installment_plan'
                defaultMessage='оформить рассрочку'
              />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[44, 70, 96]} />
        <FullPrice
          fullCost={formatMessage({
            id: 'landing_price_fifth_dimension.entire_course_for',
            defaultMessage: 'весь курс за  40 000 ₽',
          })}
        />
        <Layout flexBasis={[16, 18, 20]} />
        <Box>
          <Text
            display='inline'
            fontWeight='medium'
            fontSize={['micro', 'semiMedium', 'medium']}
            lineHeight={['primary', 'primary', 'medium']}
            color='text.gray'
          >
            <FormattedMessage
              id='landing_price.with_a_one_time_payment_of_the_course_you_save'
              defaultMessage='*при разовой оплате курса вы экономите'
            />
            <Space />
            <Text color='text.green'>
              <FormattedMessage
                id='landing_price_fifth_dimension.three_thousand_five_hundred'
                defaultMessage='3 500 ₽'
              />
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
              <FormattedMessage
                id='landing_price_fifth_dimension.eight_thousand_seven_hundred'
                defaultMessage='8 700'
              />
              <Space />
              <FormattedMessage
                id='landing_price_fifth_dimension.rubles_per_month'
                defaultMessage='₽/мес'
              />
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
              <FormattedMessage
                id='landing_price_fifth_dimension.eight_thousand_seven_hundred'
                defaultMessage='8 700'
              />
              <Space />
              <FormattedMessage
                id='landing_price_fifth_dimension.rubles_per_month'
                defaultMessage='₽/мес'
              />
            </Text>
          </Button>
        </Box>
        <ModalFormFifthDimension
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormFifthDimension
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
        <Layout flexBasis={[23, 48, 74]} />
        <Figures
          quantityMonths={formatMessage({
            id: 'landing_price_fifth_dimension.four',
            defaultMessage: '4',
          })}
          quantityVideoLessons={formatMessage({
            id: 'landing_price_fifth_dimension.seventeen',
            defaultMessage: '17',
          })}
          firstLineCircle={formatMessage({
            id: 'landing_price_fifth_dimension.twenty',
            defaultMessage: '20',
          })}
          secondLineCircle={formatMessage({
            id: 'landing_price_fifth_dimension.live_broadcasts',
            defaultMessage: 'прямых эфиров',
          })}
          rectangleRotate={-20}
          circleRotate={20}
          squareRotate={-20}
          rectanglePositionX={3.5}
          rectanglePositionY={54}
          backgroundRectangle='transparentGreenGradient'
        />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}
export { Content }
