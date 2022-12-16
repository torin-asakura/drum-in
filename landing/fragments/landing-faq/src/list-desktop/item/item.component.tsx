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

import { ItemProps }                   from './item.interfaces'

const Item: FC<ItemProps> = ({ question, answer, positionHorizontal, positionVertical, width }) => {
  const [elemHover, elemHoverProps] = useHover()

  return (
    <Box
      width={width}
      position='relative'
      borderRadius='extra'
      backgroundColor='background.smokyWhite'
    >
      <Layout flexBasis={44} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={25} />
        <Row alignItems='center'>
          <Row>
            <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
              {question}
            </Text>
          </Row>
          <Layout flexBasis={32} flexShrink={0} />
          <Box
            {...elemHoverProps}
            flexShrink={0}
            width={32}
            height={32}
            alignItems='center'
            justifyContent='center'
            borderRadius='semiMedium'
            backgroundColor='background.blackAmber'
          >
            <InvertedExclamationMarkIcon color='rgb(242,242,242)' width={4} height={17} />
          </Box>
        </Row>
        <Layout flexBasis={25} />
      </Column>
      <Layout flexBasis={44} flexShrink={0} />
      <Box
        zIndex={elemHover ? 2 : -1}
        opacity={elemHover ? 1 : 0}
        position='absolute'
        left={positionHorizontal}
        top={positionVertical}
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
            <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
              {answer}
            </Text>
          </Row>
          <Layout flexBasis={32} />
        </Column>
        <Layout flexBasis={32} flexShrink={0} />
      </Box>
    </Box>
  )
}
export { Item }
