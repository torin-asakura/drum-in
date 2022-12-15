import React               from 'react'
import { FC }              from 'react'

import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Box }             from '@ui/layout'
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
      <Layout flexBasis={20} />
      <Column width='100%'>
        <Layout flexBasis={21} />
        <Row alignItems='center'>
          <Box>
            <Text
              fontWeight='medium'
              fontSize='regular'
              lineHeight='medium'
              color={elemHover ? 'text.blackAmber' : 'text.smokyWhite'}
              style={{ transition: '0.3s' }}
            >
              {fullName}
            </Text>
          </Box>
          <Layout flexBasis={0} flexGrow={3} />
          <Box
            backgroundColor={elemHover ? 'background.blackAmber' : 'background.transparentWhite'}
            borderRadius='semiHuge'
            style={{ transition: '0.3s' }}
          >
            <Layout flexBasis={12} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={4} />
              <Row>
                <Text
                  fontWeight='medium'
                  fontSize='medium'
                  lineHeight='medium'
                  color='text.smokyWhite'
                >
                  {age}
                </Text>
              </Row>
              <Layout flexBasis={4} />
            </Column>
            <Layout flexBasis={12} flexShrink={0} />
          </Box>
          <Layout flexBasis={16} flexShrink={0} />
          <Box
            backgroundColor={elemHover ? 'background.blackAmber' : 'background.transparentWhite'}
            borderRadius='semiHuge'
            style={{ transition: '0.3s' }}
          >
            <Layout flexBasis={12} flexShrink={0} />
            <Column>
              <Layout flexBasis={4} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize='medium'
                  lineHeight='medium'
                  color='text.smokyWhite'
                >
                  {profession}
                </Text>
              </Box>
              <Layout flexBasis={4} />
            </Column>
            <Layout flexBasis={12} flexShrink={0} />
          </Box>
        </Row>
        <Layout flexBasis={21} />
      </Column>
      <Layout flexBasis={20} />
    </Box>
  )
}

export { OneStudent }
