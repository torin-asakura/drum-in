import React                           from 'react'
import { FormattedMessage }            from 'react-intl'
import { useRouter }                   from 'next/router'
import { useEffect }                   from 'react'
import { useState }                    from 'react'

import { PriceCourse as PPriceCourse } from '@shared/data'
import { Button }                      from '@ui/button'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Space }                       from '@ui/text'
import { Text }                        from '@ui/text'
import { useMockedPriceCourse }        from '@shared/data'

import { FiguresDesktop }              from './figures-desktop'
import { FullPrice }                   from './full-price'
import { PriceProps }                  from './price.interfaces'
import { Specifications }              from './specifications'
import { Title }                       from './title'
import { getUi }                       from './helpers'

const PriceBlock = () => {
  const router = useRouter()

  const { priceCourse: priceCourseData } = useMockedPriceCourse()
  const [priceCourse, setPriceCourse] = useState<PPriceCourse[]>([])

  useEffect(() => {
    setPriceCourse(priceCourseData)
    // eslint-disable-next-line
  }, [])

  let texts: PriceProps = {
    costPerMonth: '',
    currency: '',
    fullCost: '',
    economy: '',
    quantityVideoLessons: '',
    firstLineCircle: '',
    secondLineCircle: '',
    quantityMonths: '',
    backgroundRectangle: '',
    squareRotate: 0,
    circleRotate: 0,
    rectangleRotate: 0,
    rectanglePositionX: 0,
    rectanglePositionY: 0,
  }

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
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%' alignItems={['start', 'start', 'center']}>
          <Layout flexBasis={[24, 72, 120]} />
          <Box>
            <Text
              textAlign={['left', 'left', 'center']}
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'increased', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_price.tuition_fees'
                defaultMessage='стоимость обучения'
              />
            </Text>
          </Box>
          <Layout flexBasis={[24, 44, 64]} />
          <Box
            backgroundColor='background.smokyWhite'
            borderRadius='bigger'
            width={['100%', 520, '100%']}
            position='relative'
          >
            <Layout flexBasis={24} flexShrink={0} />
            <Column alignItems={['start', 'start', 'center']} width='100%'>
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
                <Button size='withoutPaddingBigHeight' variant='purpleBackground' fill>
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
              <Box display={['flex', 'flex', 'none']} width='100%'>
                <Button size='withoutPaddingMediumHeight' variant='purpleBackground' fill>
                  <Text fontWeight='semiBold' fontSize='micro' textTransform='uppercase'>
                    {texts.costPerMonth}
                    <Space />
                    {texts.currency}
                  </Text>
                </Button>
              </Box>
              <Layout flexBasis={[23, 48, 74]} />
            </Column>
            <Layout flexBasis={24} flexShrink={0} />
            <FiguresDesktop
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
          </Box>
          <Layout flexBasis={[24, 32, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}
export { PriceBlock }
