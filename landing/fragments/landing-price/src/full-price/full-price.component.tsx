import React                  from 'react'
import { FC }                 from 'react'

import { ArrowRightTailIcon } from '@ui/icons'
import { Layout }             from '@ui/layout'
import { Box }                from '@ui/layout'
import { Text }               from '@ui/text'
import { useHover }           from '@ui/utils'

import { FullPriceProps }     from './full-price.interfaces'

const FullPrice: FC<FullPriceProps> = ({ fullCost }) => {
  const [hoverElement, hoverElementProps] = useHover()

  return (
    <Box {...hoverElementProps} alignItems='center' flexShrink={0} style={{ cursor: 'pointer' }}>
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
  )
}
export { FullPrice }
