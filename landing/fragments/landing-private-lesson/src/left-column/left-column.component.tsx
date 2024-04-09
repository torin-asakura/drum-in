import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { LeftColumnProps }  from './left-column.interfaces'

const LeftColumn: FC<LeftColumnProps> = ({ privateLessonData }) => (
  <Column display={['none', 'none', 'flex']} flexBasis='100%'>
    <Box>
      <Text
        textWrap='nowrap'
        textTransform='uppercase'
        fontFamily='secondary'
        fontWeight='bold'
        fontSize={['increased', 'increased', 'semiModerate', 'big']}
        lineHeight='default'
        color='text.blackAmber'
      >
        {privateLessonData?.title}
      </Text>
    </Box>
    <Layout flexBasis='100%' flexGrow={3} />
    {privateLessonData?.details?.map((item) => (
      <Row>
        <Box>
          <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.purple'>
            {item?.title}
            <Space />
          </Text>
        </Box>
        <Box>
          <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
            <FormattedMessage id='landing_private_lesson.dash' />
            <Space />
            {item?.description}
          </Text>
        </Box>

        <Layout flexBasis={6} />
      </Row>
    ))}
  </Column>
)

export { LeftColumn }
