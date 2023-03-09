import React                            from 'react'
import { FormattedMessage }             from 'react-intl'
import { useRouter }                    from 'next/router'
import { useEffect }                    from 'react'
import { useState }                     from 'react'

import { ModalForms }                   from '@landing/modal-forms'
import { ModalMobileForms }             from '@landing/modal-forms'
import { PriceCourse as PPriceCourse }  from '@shared/data'
import { Button }                       from '@ui/button'
import { Box }                          from '@ui/layout'
import { Layout }                       from '@ui/layout'
import { Space }                        from '@ui/text'
import { Text }                         from '@ui/text'
import { useMockedPriceCourse }         from '@shared/data'

import { Figures }                      from '../figures'
import { FullPrice }                    from '../full-price'
import { Specifications }               from '../specifications'
import { Title }                        from '../title'
import { ContentWithInstallmentsProps } from './content-with-installments.interfaces'
import { getUi }                        from '../helpers'

const ContentWithInstallments = () => {
  const router = useRouter()
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const { priceCourse: priceCourseData } = useMockedPriceCourse()
  const [priceCourse, setPriceCourse] = useState<PPriceCourse[]>([])

  useEffect(() => {
    setPriceCourse(priceCourseData)
    // eslint-disable-next-line
  }, [])

  let texts: ContentWithInstallmentsProps = {}
  for (let i = 0; priceCourse.length >= i; i += 1) {
    if (priceCourse[i] !== undefined && priceCourse[i].pathPage === router.route) {
      texts = {
        costPerMonth: priceCourse[i].costPerMonth,
        currency: priceCourse[i].currency,
        fullCost: priceCourse[i].fullCost,
        economy: priceCourse[i].economy,
        quantityVideoLessons: priceCourse[i].quantityVideoLessons,
        firstLineCircle: priceCourse[i].firstLineCircle,
        secondLineCircle: priceCourse[i].secondLineCircle,
        quantityMonths: priceCourse[i].quantityMonths,
        backgroundRectangle: getUi(priceCourse[i].pathPage).backgroundRectangle,
        squareRotate: getUi(priceCourse[i].pathPage).squareRotate,
        circleRotate: getUi(priceCourse[i].pathPage).circleRotate,
        rectangleRotate: getUi(priceCourse[i].pathPage).rectangleRotate,
        rectanglePositionX: getUi(priceCourse[i].pathPage).rectanglePositionX,
        rectanglePositionY: getUi(priceCourse[i].pathPage).rectanglePositionY,
      }
    }
  }

  return (
    <>
      <Layout flexBasis={[40, 80, 120]} />
      <Title currency={texts.currency} costPerMonth={texts.costPerMonth} />
      <Layout flexBasis={[40, 50, 32]} />
      <Specifications
        quantityMonths={texts.quantityMonths}
        quantityVideoLessons={texts.quantityVideoLessons}
        firstLineCircle={texts.firstLineCircle}
        secondLineCircle={texts.secondLineCircle}
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
      <FullPrice fullCost={texts.fullCost} />
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
          <Text color='text.green'>{texts.economy}</Text>
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
            {texts.costPerMonth}
            <Space />
            {texts.currency}
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
            {texts.costPerMonth}
            <Space />
            {texts.currency}
          </Text>
        </Button>
      </Box>
      <ModalForms activeRender={visibleModal} onClose={() => setVisibleModal(false)} />
      <ModalMobileForms
        activeRender={visibleModalMobile}
        onClose={() => setVisibleModalMobile(false)}
      />
      <Layout flexBasis={[23, 48, 74]} />
      <Figures
        quantityMonths={texts.quantityMonths}
        quantityVideoLessons={texts.quantityVideoLessons}
        firstLineCircle={texts.firstLineCircle}
        secondLineCircle={texts.secondLineCircle}
        rectangleRotate={texts.rectangleRotate}
        circleRotate={texts.circleRotate}
        squareRotate={texts.squareRotate}
        rectanglePositionX={texts.rectanglePositionX}
        rectanglePositionY={texts.rectanglePositionY}
        backgroundRectangle={texts.backgroundRectangle}
      />
    </>
  )
}
export { ContentWithInstallments }
