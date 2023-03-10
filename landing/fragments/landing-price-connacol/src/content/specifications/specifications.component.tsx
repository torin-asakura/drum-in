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
  secondLineCircle,
}) => (
  <Box display={['flex', 'flex', 'none']}>
    <Column>
      <Box>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
          lineHeight='primary'
          color='text.blackAmber'
        >
          <FormattedMessage id='landing_price.dot' defaultMessage='•' />
          <Space />
          {quantityVideoLessons}
          <Space />
          <FormattedMessage id='landing_price.video_lessons' defaultMessage='видео-уроков' />
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
          <FormattedMessage id='landing_price.dot' defaultMessage='•' />
          <Space />
          {quantityMonths}
          <Space />
          <FormattedMessage id='landing_price.months' defaultMessage='месяцев' />
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
          <FormattedMessage id='landing_price.dot' defaultMessage='•' />
          <Space />
          {secondLineCircle}
        </Text>
      </Box>
    </Column>
  </Box>
)
export { Specifications }
