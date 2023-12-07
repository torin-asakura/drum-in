import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { usePrivateLesson } from '../data'

const LeftColumn = () => {
  const privateLesson = usePrivateLesson()

  return (
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
          {privateLesson?.title}
        </Text>
      </Box>
      <Layout flexBasis={0} flexGrow={3} />
      <Box>
        <Box>
          <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.purple'>
            <FormattedMessage id='landing_private_lesson.duration' />
            <Space />
          </Text>
        </Box>
        <Box>
          <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
            <FormattedMessage id='landing_private_lesson.dash' />
            <Space />
            {privateLesson?.privateLesson?.durationLesson}
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={6} />
      <Box>
        <Box>
          <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.purple'>
            <FormattedMessage id='landing_private_lesson.format' />
            <Space />
          </Text>
        </Box>
        <Box>
          <Text fontWeight='medium' fontSize='large' lineHeight='primary' color='text.blackAmber'>
            <FormattedMessage id='landing_private_lesson.dash' />
            <Space />
            {privateLesson?.privateLesson?.formatLesson}
          </Text>
        </Box>
      </Box>
    </Column>
  )
}
export { LeftColumn }
