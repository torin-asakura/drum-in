import React                               from 'react'
import { FormattedMessage }                from 'react-intl'
import { useRouter }                       from 'next/router'
import { useEffect }                       from 'react'
import { useState }                        from 'react'

import { ModalForms }                      from '@landing/modal-forms'
import { ModalMobileForms }                from '@landing/modal-forms'
import { PriceCourse as PPriceCourse }     from '@shared/data'
import { Button }                          from '@ui/button'
import { Box }                             from '@ui/layout'
import { Layout }                          from '@ui/layout'
import { Space }                           from '@ui/text'
import { Text }                            from '@ui/text'
import { useMockedPriceCourse }            from '@shared/data'

import { Figures }                         from '../figures'
import { Specifications }                  from '../specifications'
import { Title }                           from '../title'
import { ContentWithoutInstallmentsProps } from './content-without-installments.interfaces'
import { getUi }                           from '../helpers'

const ContentWithoutInstallments = () => {
  const router = useRouter()
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const { priceCourse: priceCourseData } = useMockedPriceCourse()
  const [priceCourse, setPriceCourse] = useState<PPriceCourse[]>([])

  useEffect(() => {
    setPriceCourse(priceCourseData)
    // eslint-disable-next-line
  }, [])

  let texts: ContentWithoutInstallmentsProps = {}
  for (let i = 0; priceCourse.length >= i; i += 1) {
    if (priceCourse[i] !== undefined && priceCourse[i].pathPage === router.route) {
      texts = {
        costPerMonth: priceCourse[i].costPerMonth,
        currency: priceCourse[i].currency,
        oldPrice: priceCourse[i].oldPrice,
        quantityVideoLessons: priceCourse[i].quantityVideoLessons,
        quantityMonths: priceCourse[i].quantityMonths,
        backgroundRectangle: getUi(priceCourse[i].pathPage).backgroundRectangle,
        squareRotate: getUi(priceCourse[i].pathPage).squareRotate,
        rectangleRotate: getUi(priceCourse[i].pathPage).rectangleRotate,
        rectanglePositionX: getUi(priceCourse[i].pathPage).rectanglePositionX,
        rectanglePositionY: getUi(priceCourse[i].pathPage).rectanglePositionY,
      }
    }
  }

  return (
    <>
      <Layout flexBasis={[40, 55, 155]} />
      <Box alignSelf={['start', 'start', 'center']}>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'medium', 'medium']}
          lineHeight='medium'
          color='text.gray'
        >
          <FormattedMessage id='landing_price.old_price' defaultMessage='*Старая цена' />
          <Space />
          {texts.oldPrice}
        </Text>
      </Box>
      <Layout flexBasis={[18, 24, 32]} />
      <Title currency={texts.currency} costPerMonth={texts.costPerMonth} />
      <Layout flexBasis={[40, 50, 32]} />
      <Specifications
        quantityMonths={texts.quantityMonths}
        quantityVideoLessons={texts.quantityVideoLessons}
      />
      <Box display={['none', 'none', 'flex']} width={514}>
        <Button
          size='withoutPaddingBigHeight'
          variant='purpleBackground'
          fill
          onClick={() => setVisibleModal(true)}
        >
          <Text fontWeight='semiBold' fontSize='large' textTransform='uppercase'>
            <FormattedMessage id='landing_price.pay' defaultMessage='оплатить' />
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[90, 100, 0]} display={['flex', 'flex', 'none']} />
      <Box display={['none', 'flex', 'none']} width='100%'>
        <Button
          size='withoutPaddingMediumHeight'
          variant='purpleBackground'
          fill
          onClick={() => setVisibleModal(true)}
        >
          <Text fontWeight='semiBold' fontSize='micro' textTransform='uppercase'>
            <FormattedMessage id='landing_price.pay' defaultMessage='оплатить' />
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
            <FormattedMessage id='landing_price.pay' defaultMessage='оплатить' />
          </Text>
        </Button>
      </Box>
      <ModalForms activeRender={visibleModal} onClose={() => setVisibleModal(false)} />
      <ModalMobileForms
        activeRender={visibleModalMobile}
        onClose={() => setVisibleModalMobile(false)}
      />
      <Layout flexBasis={[23, 30, 155]} />
      <Figures
        quantityMonths={texts.quantityMonths}
        quantityVideoLessons={texts.quantityVideoLessons}
        rectangleRotate={texts.rectangleRotate}
        squareRotate={texts.squareRotate}
        rectanglePositionX={texts.rectanglePositionX}
        rectanglePositionY={texts.rectanglePositionY}
        backgroundRectangle={texts.backgroundRectangle}
      />
    </>
  )
}
export { ContentWithoutInstallments }
