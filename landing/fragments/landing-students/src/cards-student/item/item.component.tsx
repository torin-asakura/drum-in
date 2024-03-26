import React          from 'react'
import { FC }         from 'react'

import { ImageBlock } from '@ui/image'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Box }        from '@ui/layout'
import { Tag }        from '@ui/tag'
import { Text }       from '@ui/text'
import { useHover }   from '@ui/utils'

import { ItemProps }  from './item.interfaces'

const Item: FC<ItemProps> = ({
  fullName,
  age,
  profession,
  description,
  horizontalPositionFirstIcon,
  verticalPositionFirstIcon,
  verticalPositionSecondIcon,
  horizontalPositionSecondIcon,
  rotateCard,
  urlFirstIcon,
  urlSecondIcon,
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
                fontFamily={['primary', 'primary', 'tertiary']}
                stateElem={elemHover}
                text={age}
              />
              <Layout flexBasis={16} flexShrink={0} />
              <Tag
                padding={['4px 12px', '6px 14px', '8px 16px']}
                fontSize={['micro', 'medium', 'regular']}
                fontFamily={['primary', 'primary', 'tertiary']}
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
        <Box
          display={['none','none','flex']}
          position='absolute'
          style={{ transition: '0.3s' }}
          top={elemHover ? verticalPositionFirstIcon : 10}
          left={horizontalPositionFirstIcon}
          width={110}
          height={110}
        >
          <ImageBlock src={urlFirstIcon} />
        </Box>
        <Box
          display={['none','none','flex']}

          position='absolute'
          style={{ transition: '0.3s' }}
          top={elemHover ? verticalPositionSecondIcon : 10}
          left={horizontalPositionSecondIcon}
          width={110}
          height={110}
        >
          <ImageBlock src={urlSecondIcon} />
        </Box>
      </Box>
      <Layout display={['flex', 'flex', 'none']} flexBasis={24} flexShrink={0} />
    </Column>
  )
}

export { Item }
