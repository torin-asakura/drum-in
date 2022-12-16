import React               from 'react'
import { FC }              from 'react'

import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Box }             from '@ui/layout'
import { Tag }             from '@ui/tag'
import { Text }            from '@ui/text'
import { useHover }        from '@ui/utils'

import { OneStudentProps } from './one-student.interfaces'

const OneStudent: FC<OneStudentProps> = ({ fullName, age, profession }) => {
  const [elemHover, elemHoverProps] = useHover()

  return (
    <Box
      {...elemHoverProps}
      width='100%'
      border={elemHover ? 'mediumBoldSmokyWhite' : 'mediumBoldSmokyWhiteDashed'}
      backgroundColor={elemHover ? 'background.smokyWhite' : 'background.blackAmber'}
      borderRadius='medium'
      style={{ transition: '0.3s' }}
    >
      <Layout flexBasis={[16, 20, 20]} />
      <Column width='100%'>
        <Layout flexBasis={[16, 21, 21]} />
        <Row alignItems='center' flexWrap='wrap'>
          <Box order={[1, 0, 0]} width={['100%', 'auto', 'auto']}>
            <Text
              fontWeight='medium'
              fontSize='regular'
              lineHeight={['big', 'medium', 'medium']}
              color={elemHover ? 'text.blackAmber' : 'text.smokyWhite'}
              style={{ transition: '0.3s' }}
            >
              {fullName}
            </Text>
          </Box>
          <Layout display={['none', 'flex', 'flex']} flexBasis={0} flexGrow={3} />
          <Tag
            padding={['4px 12px', '4px 12px', '4px 12px']}
            fontSize={['semiMedium', 'medium', 'medium']}
            fontFamily='primary'
            stateElem={elemHover}
            text={age}
          />
          <Layout flexBasis={16} flexShrink={0} />
          <Tag
            padding={['4px 12px', '4px 12px', '4px 12px']}
            fontSize={['semiMedium', 'medium', 'medium']}
            fontFamily='primary'
            stateElem={elemHover}
            text={profession}
          />
        </Row>
        <Layout flexBasis={[13, 21, 21]} />
      </Column>
      <Layout flexBasis={[16, 20, 20]} />
    </Box>
  )
}

export { OneStudent }
