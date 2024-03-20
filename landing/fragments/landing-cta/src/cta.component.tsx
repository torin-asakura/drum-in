import React                  from 'react'
import { FormattedMessage }   from 'react-intl'
import { useState }           from 'react'
import { forwardRef }         from 'react'

import { Consultation }       from '@landing/consultation'
import { MobileConsultation } from '@landing/consultation'
import { Button }             from '@ui/button'
import { PencilIcon }         from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Space }              from '@ui/text'
import { Text }               from '@ui/text'
import { useCta }             from '@globals/data'

const CtaBlock = forwardRef(({ data }: any, ref: any) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)
  const { cta } = useCta()

  return (
    <Row justifyContent='center' ref={ref}>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[32, 67, 100]} />
          <Box>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['moderate', 'godzilla', 'semiGigantic']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {cta?.title}
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
                  {cta?.text?.beforeAccent}
                  <Space />
                  <Text
                    fontWeight='medium'
                    fontSize={['semiMedium', 'semiRegular', 'semiModerate']}
                    lineHeight={['primary', 'medium', 'medium']}
                    color='text.smokyWhite'
                  >
                    {cta?.text?.accent}
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
                  {cta?.text?.afterAccent}
                </Text>
              </Box>
              <Layout flexBasis={[20, 26, 32]} />
              <Box display={['none', 'flex', 'flex']} width={318}>
                <Button
                  size='mediumPaddingBigHeight'
                  variant='whiteBackground'
                  style={{ borderWidth: '4px' }}
                  fill
                  onClick={() => setVisibleModal(true)}
                >
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize='large'
                    lineHeight='default'
                  >
                    <FormattedMessage id='landing_cta.fill_out_the_form' />
                  </Text>
                </Button>
              </Box>
              <Box display={['flex', 'none', 'none']} width='100%'>
                <Button
                  size='withoutPaddingMediumHeight'
                  variant='whiteBackground'
                  fill
                  onClick={() => setVisibleModalMobile(true)}
                >
                  <Text
                    textTransform='uppercase'
                    fontWeight='semiBold'
                    fontSize='semiMedium'
                    lineHeight='default'
                  >
                    {cta?.button}
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
          <Layout flexBasis={[32, 50, 70]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
})
export { CtaBlock }
