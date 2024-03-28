import React                            from 'react'
import { FC }                           from 'react'
import { useState }                     from 'react'

import { ModalFormFeelingOfTime }       from '@landing/modal-form-feeling-of-time'
import { ModalMobileFormFeelingOfTime } from '@landing/modal-form-feeling-of-time'
import { ArrowRightTailIcon }           from '@ui/icons'
import { Layout }                       from '@ui/layout'
import { Box }                          from '@ui/layout'
import { Text }                         from '@ui/text'
import { useHover }                     from '@ui/utils'

import { FullPriceProps }               from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ feelingOfTimeData, fullCost }) => {
  const [hoverElement, hoverElementProps] = useHover()
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  return (
    <>
      <Box
        {...hoverElementProps}
        display={['none', 'flex', 'flex']}
        alignItems='center'
        flexShrink={0}
        style={{ cursor: 'pointer' }}
        onClick={() => setVisibleModal(true)}
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
            {fullCost}
          </Text>
        </Box>
      </Box>
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
      <ModalFormFeelingOfTime
        feelingOfTimeData={feelingOfTimeData}
        activeRender={visibleModal}
        onClose={() => setVisibleModal(false)}
      />
      <ModalMobileFormFeelingOfTime
        feelingOfTimeData={feelingOfTimeData}
        activeRender={visibleModalMobile}
        onClose={() => setVisibleModalMobile(false)}
      />
    </>
  )
}
export { FullPrice }
