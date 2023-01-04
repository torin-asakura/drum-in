import React                           from 'react'
import { FC }                          from 'react'

import { InvertedExclamationMarkIcon } from '@ui/icons'
import { TriangleIcon }                from '@ui/icons'
import { Box }                         from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Text }                        from '@ui/text'
import { useHover }                    from '@ui/utils'

import { NecessaryKnowledgeProps }     from './necessary-knowledge.interfaces'

const NecessaryKnowledgeBlock: FC<NecessaryKnowledgeProps> = ({
  necessaryKnowledge,
  forWhom,
  listNecessaryKnowledge,
  titleHoverBlock,
}) => {
  const [hoverElem, colorHoverElem] = useHover()

  if (necessaryKnowledge && listNecessaryKnowledge) {
    return (
      <Box alignItems='center'>
        <Box>
          <Text
            textTransform='uppercase'
            fontWeight='medium'
            fontSize='large'
            lineHeight='primary'
            color='text.transparentSmokyWhite'
          >
            {forWhom}
          </Text>
        </Box>
        <Layout flexBasis={16} flexShrink={0} />
        <Box
          {...colorHoverElem}
          position='relative'
          width={24}
          height={24}
          alignItems='center'
          justifyContent='center'
          borderRadius='max'
          backgroundColor='background.smokyWhite'
        >
          <InvertedExclamationMarkIcon width={4} height={17} />
          <Box
            opacity={hoverElem ? 1 : 0}
            zIndex={hoverElem ? 10 : -1}
            width={335}
            position='absolute'
            top='calc(100% + 5px)'
            left={-50}
            style={{ transition: '0.3s' }}
            borderRadius='big'
            border='veryBoldDark'
            backgroundColor='background.smokyWhite'
          >
            <Box position='absolute' top={-18} left={49}>
              <TriangleIcon width={27} height={30} />
            </Box>
            <Layout flexBasis={24} flexShrink={0} />
            <Column>
              <Layout flexBasis={24} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize='large'
                  lineHeight='primary'
                  color='text.blackAmber'
                >
                  {titleHoverBlock}
                </Text>
              </Box>
              <Layout flexBasis={24} flexShrink={0} />
              {listNecessaryKnowledge.split(';').map((currentValue) => (
                <>
                  <Box>
                    <Text
                      textTransform='uppercase'
                      fontWeight='semiBold'
                      fontSize='regular'
                      lineHeight='default'
                      color='text.blackAmber'
                    >
                      {currentValue}
                    </Text>
                  </Box>
                  <Layout flexBasis={16} flexShrink={0} />
                </>
              ))}
              <Layout flexBasis={8} flexShrink={0} />
            </Column>
            <Layout flexBasis={24} flexShrink={0} />
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <Text
        textTransform='uppercase'
        fontWeight='medium'
        fontSize='large'
        lineHeight='primary'
        color='text.transparentSmokyWhite'
      >
        {forWhom}
      </Text>
    </Box>
  )
}

export { NecessaryKnowledgeBlock }
