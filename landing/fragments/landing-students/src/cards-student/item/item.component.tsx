import React         from 'react'
import { FC }        from 'react'

import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'
import { useHover }  from '@ui/utils'

import { ItemProps } from './item.interfaces'

const Item: FC<ItemProps> = ({
  fullName,
  age,
  profession,
  description,
  firstIcon,
  horizontalPositionFirstIcon,
  verticalPositionFirstIcon,
  secondIcon,
  verticalPositionSecondIcon,
  horizontalPositionSecondIcon,
  rotateCard,
}) => {
  const [elemHover, elemHoverProps] = useHover()

  return (
    <Box position='relative'>
      <Box
        {...elemHoverProps}
        zIndex={3}
        width={430}
        height={447}
        border={elemHover ? 'semiBoldTransparent' : 'veryBoldSmokyWhiteDashed'}
        borderRadius='big'
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
            <Box
              backgroundColor={elemHover ? 'background.blackAmber' : 'background.transparentWhite'}
              borderRadius='semiHuge'
              style={{ transition: '0.3s' }}
            >
              <Layout flexBasis={16} flexShrink={0} />
              <Column width='100%'>
                <Layout flexBasis={8} />
                <Row>
                  <Text
                    fontWeight='medium'
                    fontSize='regular'
                    lineHeight='default'
                    color='text.smokyWhite'
                  >
                    {age}
                  </Text>
                </Row>
                <Layout flexBasis={8} />
              </Column>
              <Layout flexBasis={16} flexShrink={0} />
            </Box>
            <Layout flexBasis={16} flexShrink={0} />
            <Box
              backgroundColor={elemHover ? 'background.blackAmber' : 'background.transparentWhite'}
              borderRadius='semiHuge'
              style={{ transition: '0.3s' }}
            >
              <Layout flexBasis={16} flexShrink={0} />
              <Column width='100%'>
                <Layout flexBasis={8} />
                <Row>
                  <Text
                    fontWeight='medium'
                    fontSize='regular'
                    lineHeight='default'
                    color='text.smokyWhite'
                  >
                    {profession}
                  </Text>
                </Row>
                <Layout flexBasis={8} />
              </Column>
              <Layout flexBasis={16} flexShrink={0} />
            </Box>
          </Row>
          <Layout flexBasis={0} flexGrow={2} />
          <Box>
            <Text
              fontWeight='medium'
              fontSize='increased'
              lineHeight='default'
              color={elemHover ? 'text.blackAmber' : 'text.smokyWhite'}
              style={{ transition: '0.3s' }}
            >
              {fullName}
            </Text>
          </Box>
          <Layout flexBasis={20} />
          <Box>
            <Text fontWeight='medium' fontSize='regular' lineHeight='medium' color='text.gray'>
              {description}
            </Text>
          </Box>
          <Layout flexBasis={[16, 22, 28]} />
        </Column>
        <Layout flexBasis={[16, 22, 23]} flexShrink={0} />
      </Box>
      <Box
        position='absolute'
        style={{ transition: '0.3s' }}
        top={elemHover ? verticalPositionFirstIcon : 10}
        left={horizontalPositionFirstIcon}
      >
        {firstIcon}
      </Box>
      <Box
        position='absolute'
        style={{ transition: '0.3s' }}
        top={elemHover ? verticalPositionSecondIcon : 10}
        left={horizontalPositionSecondIcon}
      >
        {secondIcon}
      </Box>
    </Box>
  )
}

export { Item }
