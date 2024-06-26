import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'

import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Space }               from '@ui/text'
import { Text }                from '@ui/text'

import { SpecificationsProps } from './specifications.interfaces'

const Specifications: FC<SpecificationsProps> = ({
  quantityMonths,
  quantityVideoLessons,
  firstLineCircle,
  secondLineCircle,
}) => {
  const monthCount = quantityMonths
  return (
    <Box display={['flex', 'flex', 'none']}>
      <Column>
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
            lineHeight='primary'
            color='text.blackAmber'
          >
            <FormattedMessage id='landing_price.dot' />
            <Space />
            {quantityVideoLessons}
            <Space />
            <FormattedMessage id='landing_price.video_lessons' />
          </Text>
        </Box>
        <Layout flexBasis={[4, 6, 0]} />
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
            lineHeight='primary'
            color='text.blackAmber'
          >
            <FormattedMessage id='landing_price.dot' />
            <Space />
            {quantityMonths}
            <Space />
            <FormattedMessage id='course.price.plural_format_months' values={{ monthCount }} />
          </Text>
        </Box>
        <Layout flexBasis={[4, 6, 0]} />
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
            lineHeight='primary'
            color='text.blackAmber'
          >
            <FormattedMessage id='landing_price.dot' />
            <Space />
            {firstLineCircle}
            <Space />
            {secondLineCircle}
          </Text>
        </Box>
      </Column>
    </Box>
  )
}
export { Specifications }
