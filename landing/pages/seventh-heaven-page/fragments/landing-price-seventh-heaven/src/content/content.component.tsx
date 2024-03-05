import React                            from 'react'
import { FormattedMessage }             from 'react-intl'
import { useState }                     from 'react'
import { useIntl }                      from 'react-intl'

import { ModalFormSeventhHeaven }       from '@landing/modal-form-seventh-heaven'
import { ModalMobileFormSeventhHeaven } from '@landing/modal-form-seventh-heaven'
import { Button }                       from '@ui/button'
import { Box }                          from '@ui/layout'
import { Column }                       from '@ui/layout'
import { Layout }                       from '@ui/layout'
import { Space }                        from '@ui/text'
import { Text }                         from '@ui/text'

import { Figures }                      from './figures'
import { FullPrice }                    from './full-price'
import { Specifications }               from './specifications'
import { Title }                        from './title'
import { usePrice }                     from '../data'

const Content = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const { formatMessage } = useIntl()
  const price = usePrice()?.tuitionFees

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
          currency={price?.priceInstallmentPlan}
          costPerMonth={formatMessage({
            id: 'landing_price.rubles_per_month',
          })}
        />
        <Layout flexBasis={[40, 50, 32]} />
        <Specifications
          quantityMonths={price?.numberOfMonths}
          quantityVideoLessons={price?.numberOfVideoLessons}
          firstLineCircle={price?.numberForTheCircle}
          secondLineCircle={price?.nameOfTheCharacteristicForCircle}
          wordMonth={price?.secondLineRectangle}
        />
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
        <FullPrice fullCost={price?.titleForButton} />
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
            <Text color='text.green'>{price?.savingsWithOneTimePayment}</Text>
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
              {price?.priceInstallmentPlan}
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
              {price?.priceInstallmentPlan}
              <Space />
              <FormattedMessage id='landing_price.rubles_per_month' />
            </Text>
          </Button>
        </Box>
        <ModalFormSeventhHeaven
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormSeventhHeaven
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
        <Layout flexBasis={[23, 48, 74]} />
        <Figures
          quantityMonths={price?.numberOfMonths}
          quantityVideoLessons={price?.numberOfVideoLessons}
          firstLineCircle={price?.numberForTheCircle}
          secondLineCircle={price?.nameOfTheCharacteristicForCircle}
          secondLineRectangle={price?.secondLineRectangle}
          rectangleRotate={-20}
          circleRotate={20}
          squareRotate={-20}
          rectanglePositionX={3.5}
          rectanglePositionY={54}
          backgroundRectangle='transparentPinkGradient'
        />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}
export { Content }
