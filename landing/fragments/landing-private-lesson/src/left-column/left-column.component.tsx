import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

const LeftColumn = () => (
  <Column display={['none', 'none', 'flex']}>
    <Box>
      <Text
        wordBreak='break-word'
        textTransform='uppercase'
        fontFamily='DrukWideCy'
        fontWeight='bold'
        fontSize='big'
        lineHeight='default'
        color='text.blackAmber'
      >
        <FormattedMessage id='landing_private_lesson.private' defaultMessage='Индивидуальное' />
      </Text>
    </Box>
    <Box>
      <Text
        wordBreak='break-word'
        textTransform='uppercase'
        fontFamily='DrukWideCy'
        fontWeight='bold'
        fontSize='big'
        lineHeight='default'
        color='text.blackAmber'
      >
        <FormattedMessage id='landing_private_lesson.lesson' defaultMessage='Занятие' />
      </Text>
    </Box>
    <Layout flexBasis={0} flexGrow={3} />
    <Box>
      <Box>
        <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.purple'>
          <FormattedMessage id='landing_private_lesson.duration' defaultMessage='Длительность' />
          <Space />
        </Text>
      </Box>
      <Box>
        <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
          <FormattedMessage
            id='landing_private_lesson.dash_ninety_minutes'
            defaultMessage='— 90 минут'
          />
        </Text>
      </Box>
    </Box>
    <Layout flexBasis={6} />
    <Box>
      <Box>
        <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.purple'>
          <FormattedMessage id='landing_private_lesson.format' defaultMessage='Формат' />
          <Space />
        </Text>
      </Box>
      <Box>
        <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
          <FormattedMessage
            id='landing_private_lesson.dash_online-lesson_in_zoom'
            defaultMessage='— онлайн-занятие в Zoom'
          />
        </Text>
      </Box>
    </Box>
  </Column>
)
export { LeftColumn }
