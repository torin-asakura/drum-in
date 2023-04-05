import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { Buttons }          from './buttons'
import { usePrivateLesson } from '../data'

const RightColumn = () => {
  const privateLesson = usePrivateLesson()?.privateLesson

  return (
    <Column width={['100%', '100%', 598]}>
      <Box display={['none', 'none', 'flex']}>
        <Text fontWeight='medium' fontSize='mild' lineHeight='medium' color='text.purple'>
          {privateLesson?.subtitle}
        </Text>
      </Box>
      <Layout order={[2, 2, 0]} flexBasis={[20, 30, 12]} flexShrink={0} />
      <Box order={[3, 3, 0]} width={['100%', 525, 'auto']}>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight={['primary', 'primary', 'medium']}
          color='text.gray'
        >
          {privateLesson?.description}
        </Text>
      </Box>
      <Layout order={[4, 4, 0]} flexShrink={0} flexBasis={[12, 18, 28]} />
      <Column order={[5, 5, 0]} display={['flex', 'flex', 'none']}>
        <Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color='text.purple'
            >
              <FormattedMessage
                id='landing_private_lesson.duration'
                defaultMessage='Длительность'
              />
              <Space />
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color='text.blackAmber'
            >
              <FormattedMessage id='landing_private_lesson.dash' defaultMessage='—' />
              <Space />
              {privateLesson?.durationLesson}
            </Text>
          </Box>
        </Box>
        <Layout flexBasis={[4, 5, 6]} />
        <Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color='text.purple'
            >
              <FormattedMessage id='landing_private_lesson.format' defaultMessage='Формат' />
              <Space />
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color='text.blackAmber'
            >
              <FormattedMessage id='landing_private_lesson.dash' defaultMessage='—' />
              <Space />
              {privateLesson?.formatLesson}
            </Text>
          </Box>
        </Box>
      </Column>
      <Box order={[1, 1, 0]}>
        <Text
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiBig', 'semiExtra', 'moderate']}
          lineHeight='default'
          color='text.blackAmber'
        >
          {privateLesson?.price}
        </Text>
      </Box>
      <Layout order={[6, 6, 0]} flexShrink={0} flexBasis={65} />
      <Buttons />
    </Column>
  )
}
export { RightColumn }
