import React                               from 'react'
import { FormattedMessage }                from 'react-intl'
import { useState }                        from 'react'
import { useIntl }                         from 'react-intl'

import { ModalFormPolyrhythmicKeys }       from '@landing/modal-form-polyrhythmic-keys'
import { ModalMobileFormPolyrhythmicKeys } from '@landing/modal-form-polyrhythmic-keys'
import { Button }                          from '@ui/button'
import { Box }                             from '@ui/layout'
import { Column }                          from '@ui/layout'
import { Layout }                          from '@ui/layout'
import { Space }                           from '@ui/text'
import { Text }                            from '@ui/text'

import { Figures }                         from './figures'
import { Specifications }                  from './specifications'
import { Title }                           from './title'

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
            <FormattedMessage
              id='landing_price_polyrhythmic_keys.ten_thousand'
              defaultMessage='10 000 ₽'
            />
          </Text>
        </Box>
        <Layout flexBasis={[18, 24, 32]} />
        <Title
          price={formatMessage({
            id: 'landing_price_polyrhythmic_keys.eight_thousand_seven_hundred',
            defaultMessage: '8 700 ₽',
          })}
        />
        <Layout flexBasis={[40, 50, 32]} />
        <Specifications
          quantityMonths={formatMessage({
            id: 'landing_price_polyrhythmic_keys.one',
            defaultMessage: '1',
          })}
          quantityVideoLessons={formatMessage({
            id: 'landing_price_polyrhythmic_keys.six',
            defaultMessage: '6',
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
        <ModalFormPolyrhythmicKeys
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormPolyrhythmicKeys
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
        <Layout flexBasis={[23, 30, 155]} />
        <Figures
          quantityMonths={formatMessage({
            id: 'landing_price_polyrhythmic_keys.one',
            defaultMessage: '1',
          })}
          quantityVideoLessons={formatMessage({
            id: 'landing_price_polyrhythmic_keys.six',
            defaultMessage: '6',
          })}
          rectangleRotate={-10}
          squareRotate={-5}
          rectanglePositionX={8.5}
          rectanglePositionY={29.5}
          backgroundRectangle='transparentPurpleGradient'
        />
      </Column>
      <Layout flexBasis={24} flexShrink={0} />
    </Box>
  )
}
export { Content }