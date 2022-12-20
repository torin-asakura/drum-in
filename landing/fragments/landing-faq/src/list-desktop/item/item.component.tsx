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
import { getColorBackground }          from '../../helpers'
import { getColorBackgroundIcon }      from '../../helpers'
import { getColorBorder }              from '../../helpers'
import { getColorIcon }                from '../../helpers'
import { getColorText }                from '../../helpers'

const Item: FC<ItemProps> = ({ question, answer, positionVertical, width, active, setActive }) => {
  const [elemHover, elemHoverProps] = useHover()
  const { isOpen } = usePopover('bottom-center', 0, 'hover')

  return (
    <Box
      width={width}
      borderRadius='extra'
      border={getColorBorder(isOpen, active, elemHover)}
      backgroundColor={getColorBackground(isOpen, active, elemHover)}
    >
      <Layout flexBasis={44} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={25} />
        <Row alignItems='center'>
          <Row>
            <Text
              fontWeight='medium'
              fontSize='large'
              lineHeight='primary'
              color={getColorText(isOpen, active, elemHover)}
            >
              {question}
            </Text>
          </Row>
          <Layout flexBasis={32} flexShrink={0} />
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
              backgroundColor={getColorBackgroundIcon(isOpen, active, elemHover)}
            >
              <InvertedExclamationMarkIcon
                color={getColorIcon(isOpen, active, elemHover)}
                width={4}
                height={17}
              />
            </Box>
            <Box
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
        </Row>
        <Layout flexBasis={25} />
      </Column>
      <Layout flexBasis={44} flexShrink={0} />
    </Box>
  )
}
export { Item }
