import React                           from 'react'
import { FC }                          from 'react'

import { HashtagIcon }                 from '@ui/icons'
import { InvertedExclamationMarkIcon } from '@ui/icons'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { useHover }                    from '@ui/utils'
import { usePopover }                  from '@ui/utils'

import { ItemProps }                   from './item.interfaces'
import { getColor }                    from '../../helpers'

const Item: FC<ItemProps> = ({ question, answer, positionVertical, active, setActive }) => {
  const [elemHover, elemHoverProps] = useHover()
  const { isOpen } = usePopover('bottom-center', 0, 'hover')

  return (
    <Box
      padding='25px 44px'
      borderRadius='extra'
      border={getColor(isOpen, active, elemHover).border}
      backgroundColor={getColor(isOpen, active, elemHover).background}
      style={{ transition: '0.2s' }}
    >
      <Box paddingRight={32}>
        <Text
          fontWeight='medium'
          fontSize='large'
          lineHeight='primary'
          color={getColor(isOpen, active, elemHover).text}
          style={{ transition: '0.2s' }}
        >
          {question}
        </Text>
      </Box>
      <Box {...elemHoverProps} position='relative'>
        <Box
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          flexShrink={0}
          width={32}
          height={32}
          alignItems='center'
          justifyContent='center'
          borderRadius='semiMedium'
          backgroundColor={getColor(isOpen, active, elemHover).backgroundIcon}
          style={{ transition: '0.2s', cursor: 'pointer' }}
        >
          <InvertedExclamationMarkIcon
            color={getColor(isOpen, active, elemHover).icon}
            width={4}
            height={17}
          />
        </Box>
        <Box
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          zIndex={elemHover ? 2 : -1}
          opacity={elemHover ? 1 : 0}
          position='absolute'
          left={0}
          top={positionVertical === 'bottom' ? 42 : 'auto'}
          bottom={positionVertical === 'top' ? 42 : 'auto'}
          width={750}
          border='mediumBoldBlackAmber'
          borderRadius='extra'
          backgroundColor='background.smokyWhite'
          style={{ transition: '0.3s' }}
        >
          <Layout flexBasis={32} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={32} />
            <Box>
              <HashtagIcon width={40} height={40} />
            </Box>
            <Layout flexBasis={32} flexShrink={0} />
            <Row>
              <Text
                fontWeight='medium'
                fontSize='large'
                lineHeight='primary'
                color='text.blackAmber'
              >
                {answer}
              </Text>
            </Row>
            <Layout flexBasis={32} />
          </Column>
          <Layout flexBasis={32} flexShrink={0} />
        </Box>
      </Box>
    </Box>
  )
}
export { Item }
