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
import { MotionBox }                   from './styles'
import { getColor }                    from '../../helpers'

const Item: FC<ItemProps> = ({ question, answer, active, setActive, positionVertical }) => {
  const [elemHover, elemHoverProps] = useHover()
  const { triggerProps, layerProps, isOpen, render } = usePopover(positionVertical, 9, 'hover')

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
      <Box {...elemHoverProps} {...triggerProps}>
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
        {render(
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            zIndex={50}
            {...layerProps}
          >
            <Box
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
              width={750}
              border='mediumBoldBlackAmber'
              borderRadius='extra'
              backgroundColor='background.smokyWhite'
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
          </MotionBox>
        )}
      </Box>
    </Box>
  )
}
export { Item }
