import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { PencilIcon }       from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

const CtaBlock = () => {
  const [hoverElem, hoverElemProps] = useHover()

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[32, 67, 100]} />
          <Box>
            <Text
              textTransform='uppercase'
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['moderate', 'godzilla', 'semiGigantic']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_banner.any_other_questions'
                defaultMessage='остались вопросы?'
              />
            </Text>
          </Box>
          <Layout flexBasis={[8, 40, 86]} />
          <Row alignItems='start'>
            <Box width='50%' display={['none', 'flex', 'flex']} justifyContent='end'>
              <PencilIcon width={68} height={103} />
            </Box>
            <Layout display={['none', 'flex', 'flex']} flexBasis={[0, 100, 223]} flexShrink={0} />
            <Column flexShrink={0} width={['100%', '50%', '50%']}>
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['semiMedium', 'semiRegular', 'semiModerate']}
                  lineHeight={['primary', 'medium', 'medium']}
                  color='text.gray'
                >
                  <FormattedMessage
                    id='landing_cta.fill_out_the_form_and_get'
                    defaultMessage='Заполните форму и получите'
                  />
                  <Space />
                  <Text
                    fontWeight='medium'
                    fontSize={['semiMedium', 'semiRegular', 'semiModerate']}
                    lineHeight={['primary', 'medium', 'medium']}
                    color='text.smokyWhite'
                  >
                    <FormattedMessage id='landing_cta.free' defaultMessage='бесплатную' />
                  </Text>
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['semiMedium', 'semiRegular', 'semiModerate']}
                  lineHeight={['primary', 'medium', 'medium']}
                  color='text.gray'
                >
                  <FormattedMessage
                    id='landing_cta.advice_from_a_teacher'
                    defaultMessage='консультацию от преподавателя'
                  />
                </Text>
              </Box>
              <Layout flexBasis={[20, 26, 32]} />
              <Box
                display={['none', 'flex', 'flex']}
                {...hoverElemProps}
                border={hoverElem ? 'mediumBoldSmokyWhite' : 'mediumTransparent'}
                borderRadius='larger'
                width={311}
              >
                <Button size='mediumPaddingBigHeight' variant='whiteBackground' fill>
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize='large'
                    lineHeight='default'
                  >
                    <FormattedMessage
                      id='landing_cta.fill_out_the_form'
                      defaultMessage='заполнить форму'
                    />
                  </Text>
                </Button>
              </Box>
              <Box display={['flex', 'none', 'none']} width='100%'>
                <Button size='withoutPaddingMediumHeight' variant='whiteBackground' fill>
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize='semiMedium'
                    lineHeight='default'
                  >
                    <FormattedMessage
                      id='landing_cta.fill_out_the_form'
                      defaultMessage='заполнить форму'
                    />
                  </Text>
                </Button>
              </Box>
            </Column>
          </Row>
          <Layout flexBasis={[32, 50, 70]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}
export { CtaBlock }
