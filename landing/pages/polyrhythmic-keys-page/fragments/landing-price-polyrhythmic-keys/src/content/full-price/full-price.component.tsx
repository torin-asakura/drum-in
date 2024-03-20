import React                               from 'react'
import { FC }                              from 'react'
import { useState }                        from 'react'

import { ModalMobileFormPolyrhythmicKeys } from '@landing/modal-form-polyrhythmic-keys'
import { ArrowRightTailIcon }              from '@ui/icons'
import { Layout }                          from '@ui/layout'
import { Box }                             from '@ui/layout'
import { Text }                            from '@ui/text'
import { useHover }                        from '@ui/utils'

import { FullPriceProps }                  from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ fullCost }) => {
  const [hoverElement, hoverElementProps] = useHover()
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  return (
    <>
      <Box
        {...hoverElementProps}
        display={['flex', 'none', 'none']}
        alignItems='center'
        flexShrink={0}
        style={{ cursor: 'pointer' }}
        onClick={() => setVisibleModalMobile(true)}
      >
        <Box width={56} height={14} flexShrink={0}>
          <ArrowRightTailIcon
            width='100%'
            height='100%'
            color={hoverElement ? 'rgb(156, 101, 242)' : ''}
          />
        </Box>
        <Layout flexBasis={16} flexShrink={0} style={{ transition: '0.3s' }} />
        <Box flexShrink={0}>
          <Text
            textTransform='uppercase'
            fontFamily='primary'
            fontWeight='semiBold'
            fontSize='semiMedium'
            lineHeight='default'
            color={hoverElement ? 'text.purple' : 'text.blackAmber'}
          >
            {fullCost}
          </Text>
        </Box>
      </Box>
      <ModalMobileFormPolyrhythmicKeys
        activeRender={visibleModalMobile}
        onClose={() => setVisibleModalMobile(false)}
      />
    </>
  )
}
export { FullPrice }
