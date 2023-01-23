import React                 from 'react'
import { FC }                from 'react'

import { Button }            from '@ui/button'
import { ReturnIcon }        from '@ui/icons'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Text }              from '@ui/text'

import { RemoteCourseProps } from './remote-course.interfaces'

const RemoteCourse: FC<RemoteCourseProps> = ({ title }) => (
  <Row>
    <Box
      width='100%'
      backgroundColor='background.veryTransparentSmokyWhite'
      borderRadius={['semiMedium', 'medium', 'medium']}
    >
      <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
        <Row>
          <Text
            fontWeight='medium'
            fontSize={['micro', 'medium', 'medium']}
            lineHeight='medium'
            color='text.gray'
          >
            {title}
          </Text>
        </Row>
        <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[13, 18, 18]} flexShrink={0} />
    </Box>
    <Layout flexBasis={[8, 12, 12]} flexShrink={0} />
    <Box display={['none', 'flex', 'flex']}>
      <Button size='middlingPaddingSemiBigHeight' variant='veryTransparentSmokyWhiteBackground'>
        <ReturnIcon width={20} height={20} />
      </Button>
    </Box>
    <Box display={['flex', 'none', 'none']}>
      <Button
        size='semiLittlePaddingSemiMediumHeight'
        variant='veryTransparentSmokyWhiteBackground'
      >
        <ReturnIcon width={20} height={20} />
      </Button>
    </Box>
  </Row>
)

export { RemoteCourse }
