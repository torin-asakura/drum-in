import React                       from 'react'
import { FC }                      from 'react'
import { useIntl }                 from 'react-intl'

import { Circle }                  from '@ui/figures'
import { Rectangle }               from '@ui/figures'
import { Square }                  from '@ui/figures'
import { Box }                     from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Text }                    from '@ui/text'

import { ItemProps }               from './item.interfaces'
import { NecessaryKnowledgeBlock } from './necessary-knowledge'

const Item: FC<ItemProps> = ({
  forWhom,
  level,
  desc,
  squareRotate,
  squarePositionX,
  squarePositionY,
  quantityLiveBroadcast,
  circlePositionY,
  circlePositionX,
  rectangleRotate,
  rectanglePositionY,
  rectanglePositionX,
  rectangleColor,
  quantityVideoLessons,
  quantityMonths,
  textMonths,
  necessaryKnowledge,
  titleHoverBlock,
  listNecessaryKnowledge,
}) => {
  const { formatMessage } = useIntl()

  return (
    <Box
      width='100%'
      height={400}
      border='veryBoldSmokyWhite'
      borderRight='none'
      borderRadius='huge'
    >
      <Row>
        <Layout flexBasis={40} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={56} />
          <NecessaryKnowledgeBlock
            forWhom={forWhom}
            necessaryKnowledge={necessaryKnowledge}
            titleHoverBlock={titleHoverBlock}
            listNecessaryKnowledge={listNecessaryKnowledge}
          />
          <Layout flexGrow={2} />
          <Box>
            <Text
              textTransform='uppercase'
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize='big'
              lineHeight='default'
              color='text.smokyWhite'
            >
              {level}
            </Text>
          </Box>
          <Layout flexBasis={20} />
          <Box>
            <Text
              fontWeight='medium'
              fontSize='large'
              lineHeight='primary'
              color='text.transparentSmokyWhite'
            >
              {desc}
            </Text>
          </Box>
          <Layout flexBasis={52} />
        </Column>
        <Layout flexBasis={40} flexShrink={0} />
      </Row>
      <Layout flexBasis={215} />
      <Box
        width={586}
        height={400}
        flexShrink={0}
        alignSelf='center'
        overflow='hidden'
        border='veryBoldSmokyWhite'
        borderRadius='huge'
        position='relative'
      >
        <Box position='absolute' right={squarePositionX} bottom={squarePositionY}>
          <Square
            firstLine={quantityVideoLessons}
            secondLine={formatMessage({
              id: 'landing_choose_course.video_lessons',
              defaultMessage: 'видео-уроков',
            })}
            rotate={squareRotate}
          />
        </Box>
        <Box position='absolute' right={circlePositionX} bottom={circlePositionY}>
          <Circle
            gradient='grayWhiteGradient'
            firstLine={quantityLiveBroadcast}
            secondLine={formatMessage({
              id: 'landing_program.live-broadcast',
              defaultMessage: 'прямых эфиров',
            })}
          />
        </Box>
        <Box position='absolute' right={rectanglePositionX} bottom={rectanglePositionY}>
          <Rectangle
            color={rectangleColor}
            firstLine={quantityMonths}
            secondLine={textMonths}
            rotate={rectangleRotate}
          />
        </Box>
      </Box>
    </Box>
  )
}

export { Item }
