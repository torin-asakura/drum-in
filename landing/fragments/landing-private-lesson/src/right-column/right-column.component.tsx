import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout/src'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { Buttons }          from './buttons'
import { RightColumnProps } from './right-column.interfaces'

const RightColumn: FC<RightColumnProps> = ({ privateLessonData }) => {
  const { formatMessage } = useIntl()
  return (
    <Column   flexBasis='100%'>
      <Box display={['none', 'none', 'flex']} >
        <Text fontWeight='medium' fontSize={['mild','mild','small','mild']} lineHeight='medium' color='text.purple'>
          {privateLessonData?.cta?.title}
        </Text>
      </Box>
      <Layout order={[2, 2, 0]} flexBasis={[20, 30, 12]} flexShrink={0} />
      <Box order={[3, 3, 0]} width={[300, 525, 'auto']}>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight={['primary', 'primary', 'medium']}
          color='text.gray'
        >
          {privateLessonData?.cta?.description}
        </Text>
      </Box>
      <Layout order={[4, 4, 0]} flexShrink={0} flexBasis={[12, 18, 28]} />
      <Column order={[5, 5, 0]} display={['flex', 'flex', 'none']}>
        {privateLessonData?.details?.map((item) => (
          <Row>
            <Box>
              <Text
                fontWeight='medium'
                fontSize={['semiMedium', 'semiRegular', 'large']}
                lineHeight='primary'
                color='text.purple'
              >
                {item?.title}
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
                <FormattedMessage id='landing_private_lesson.dash' />
                <Space />
                {item?.description}
              </Text>
            </Box>

            <Layout flexBasis={6} />
          </Row>
        ))}
      </Column>
      <Box  order={[1, 1, 0]}>
        <Text
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={['semiBig', 'semiExtra', 'moderate']}
          lineHeight='default'
          color='text.blackAmber'
        >
          {privateLessonData?.cta?.price}
          <Space />
          {formatMessage({ id: 'course.price.rubles_currency' })}
        </Text>
      </Box>
      <Layout order={[6, 6, 0]} flexShrink={0} flexBasis={65} />
      <Buttons privateLessonData={privateLessonData} />
    </Column>
  )
}
export { RightColumn }
