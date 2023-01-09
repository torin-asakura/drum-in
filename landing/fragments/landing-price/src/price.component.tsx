import React                  from 'react'
import { FormattedMessage }   from 'react-intl'

import { Button }             from '@ui/button'
import { ArrowRightTailIcon } from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Space }              from '@ui/text'
import { Text }               from '@ui/text'
import { useHover }           from '@ui/utils'

import { FiguresDesktop }     from './figures-desktop'
import { Specifications }     from './specifications'
import { Title }              from './title'

const PriceBlock = () => {
  const [hoverElement, hoverElementProps] = useHover()

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
              <Title />
              <Layout flexBasis={[40, 50, 32]} />
              <Specifications />
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
              <Box
                {...hoverElementProps}
                alignItems='center'
                flexShrink={0}
                style={{ cursor: 'pointer' }}
              >
                <Layout
                  display={['none', 'none', 'flex']}
                  flexBasis={hoverElement ? 20 : 0}
                  flexShrink={0}
                  style={{ transition: '0.3s' }}
                />
                <Box width={[56, 104, 164]} height={[14, 26, 40]} flexShrink={0}>
                  <ArrowRightTailIcon
                    width='100%'
                    height='100%'
                    color={hoverElement ? 'rgb(156, 101, 242)' : ''}
                  />
                </Box>
                <Layout
                  flexBasis={[16, 32, hoverElement ? 30 : 50]}
                  flexShrink={0}
                  style={{ transition: '0.3s' }}
                />
                <Layout
                  display={['none', 'none', 'flex']}
                  flexBasis={hoverElement ? 0 : 20}
                  flexShrink={0}
                  style={{ transition: '0.3s' }}
                />
                <Box flexShrink={0}>
                  <Text
                    textTransform='uppercase'
                    fontFamily={['primary', 'primary', 'secondary']}
                    fontWeight={['semiBold', 'semiBold', 'bold']}
                    fontSize={['semiMedium', 'semiRegular', 'regular']}
                    lineHeight={['default', 'default', 'extra']}
                    color={hoverElement ? 'text.purple' : 'text.blackAmber'}
                  >
                    <FormattedMessage
                      id='landing_price.the_entire_course_for'
                      defaultMessage='весь курс за  117 400 ₽'
                    />
                  </Text>
                </Box>
              </Box>
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
                      id='landing_price.thirteen_thousand_one_hundred"'
                      defaultMessage='13 100 ₽  '
                    />
                  </Text>
                </Text>
              </Box>
              <Layout flexBasis={[24, 32, 0]} display={['flex', 'flex', 'none']} />
              <Box display={['flex', 'flex', 'none']} width='100%'>
                <Button size='withoutPaddingMediumHeight' variant='purpleBackground' fill>
                  <Text fontWeight='semiBold' fontSize='micro' textTransform='uppercase'>
                    <FormattedMessage
                      id='landing_price.eight_thousand_seven_hundred_rubles'
                      defaultMessage='8 700 ₽/мес'
                    />
                  </Text>
                </Button>
              </Box>
              <Layout flexBasis={[23, 48, 74]} />
            </Column>
            <Layout flexBasis={24} flexShrink={0} />
            <FiguresDesktop />
          </Box>
          <Layout flexBasis={[24, 32, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}
export { PriceBlock }
