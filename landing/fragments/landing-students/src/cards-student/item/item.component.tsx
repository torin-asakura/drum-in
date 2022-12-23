import React                      from 'react'
import { FC }                     from 'react'

import { Condition }              from '@ui/condition'
import { MarchingDrumIcon }       from '@ui/icons'
import { MicrophoneIcon }         from '@ui/icons'
import { MusicalNotesIcon }       from '@ui/icons'
import { SaxophoneIcon }          from '@ui/icons'
import { SaxophoneWithNotesIcon } from '@ui/icons'
import { ViolinIcon }             from '@ui/icons'
import { ViolinWithBowIcon }      from '@ui/icons'
import { DrumTurnedLeftIcon }     from '@ui/icons'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Box }                    from '@ui/layout'
import { Tag }                    from '@ui/tag'
import { Text }                   from '@ui/text'
import { useHover }               from '@ui/utils'

import { ItemProps }              from './item.interfaces'

const Item: FC<ItemProps> = ({
  fullName,
  age,
  itemId,
  profession,
  description,
  horizontalPositionFirstIcon,
  verticalPositionFirstIcon,
  verticalPositionSecondIcon,
  horizontalPositionSecondIcon,
  rotateCard,
}) => {
  const [elemHover, elemHoverProps] = useHover()

  return (
    <Column>
      <Box position='relative'>
        <Box
          {...elemHoverProps}
          zIndex={3}
          width={[300, 380, 430]}
          height={[300, 375, 447]}
          border={[
            'mediumBoldSmokyWhiteDashed',
            'mediumBoldSmokyWhiteDashed',
            elemHover ? 'semiBoldTransparent' : 'veryBoldSmokyWhiteDashed',
          ]}
          borderRadius={['medium', 'bigger', 'big']}
          backgroundColor={elemHover ? 'background.smokyWhite' : 'background.blackAmber'}
          style={
            elemHover
              ? { transform: `rotate(${rotateCard}deg)`, transition: '0.3s' }
              : { transform: 'rotate(0deg)', transition: '0.3s' }
          }
        >
          <Layout flexBasis={[16, 22, 23]} flexShrink={0} />
          <Column>
            <Layout flexBasis={[16, 22, 28]} />
            <Row>
              <Tag
                padding={['4px 12px', '6px 14px', '8px 16px']}
                fontSize={['micro', 'medium', 'regular']}
                fontFamily={['primary', 'primary', 'inter']}
                stateElem={elemHover}
                text={age}
              />
              <Layout flexBasis={16} flexShrink={0} />
              <Tag
                padding={['4px 12px', '6px 14px', '8px 16px']}
                fontSize={['micro', 'medium', 'regular']}
                fontFamily={['primary', 'primary', 'inter']}
                stateElem={elemHover}
                text={profession}
              />
            </Row>
            <Layout flexBasis={0} flexGrow={2} />
            <Box>
              <Text
                fontWeight='medium'
                fontSize={['large', 'moderate', 'increased']}
                lineHeight='default'
                color={elemHover ? 'text.blackAmber' : 'text.smokyWhite'}
                style={{ transition: '0.3s' }}
              >
                {fullName}
              </Text>
            </Box>
            <Layout flexBasis={[12, 16, 20]} />
            <Box>
              <Text
                fontWeight='medium'
                fontSize={['semiMedium', 'semiRegular', 'regular']}
                lineHeight={['primary', 'primary', 'medium']}
                color='text.gray'
              >
                {description}
              </Text>
            </Box>
            <Layout flexBasis={[16, 22, 28]} />
          </Column>
          <Layout flexBasis={[16, 22, 23]} flexShrink={0} />
        </Box>
        <Condition match={itemId === 'saxophonist'}>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionFirstIcon : 10}
            left={horizontalPositionFirstIcon}
          >
            <SaxophoneWithNotesIcon width={110} height={110} />
          </Box>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionSecondIcon : 10}
            left={horizontalPositionSecondIcon}
          >
            <SaxophoneIcon width={110} height={110} />
          </Box>
        </Condition>
        <Condition match={itemId === 'drummer'}>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionFirstIcon : 10}
            left={horizontalPositionFirstIcon}
          >
            <DrumTurnedLeftIcon width={110} height={110} />
          </Box>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionSecondIcon : 10}
            left={horizontalPositionSecondIcon}
          >
            <MarchingDrumIcon width={110} height={110} />
          </Box>
        </Condition>
        <Condition match={itemId === 'violinist'}>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionFirstIcon : 10}
            left={horizontalPositionFirstIcon}
          >
            <ViolinIcon width={110} height={110} />
          </Box>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionSecondIcon : 10}
            left={horizontalPositionSecondIcon}
          >
            <ViolinWithBowIcon width={110} height={110} />
          </Box>
        </Condition>
        <Condition match={itemId === 'vocalist'}>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionFirstIcon : 10}
            left={horizontalPositionFirstIcon}
          >
            <MicrophoneIcon width={110} height={110} />
          </Box>
          <Box
            position='absolute'
            style={{ transition: '0.3s' }}
            top={elemHover ? verticalPositionSecondIcon : 10}
            left={horizontalPositionSecondIcon}
          >
            <MusicalNotesIcon width={110} height={110} />
          </Box>
        </Condition>
      </Box>
      <Layout display={['flex', 'flex', 'none']} flexBasis={24} flexShrink={0} />
    </Column>
  )
}

export { Item }
