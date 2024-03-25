import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box,Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'


const LeftColumn = ({privateLessonData}) => (
    <Column display={['none', 'none', 'flex']}>
      <Box>
        <Text
          wordBreak='break-word'
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize='big'
          lineHeight='default'
          color='text.blackAmber'
        >
          {privateLessonData.title}
        </Text>
      </Box>
      <Layout flexBasis={0} flexGrow={3} />
      {privateLessonData.details.map(({title,description})=>(
       <Row>
       <Box>
         <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.purple'>
           {title}
           <Space />
         </Text>
       </Box>
       <Box>
         <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
           <FormattedMessage id='landing_private_lesson.dash' />
           <Space />
           {description}
         </Text>
       </Box>

        <Layout flexBasis={6} />
       </Row>
      ))}

    </Column>
  )

export { LeftColumn }
