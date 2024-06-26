import React                           from 'react'
import { FC }                          from 'react'

import { ArrowDownIcon }               from '@ui/icons'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { formatContent }               from '@shared/utils'

import { BannerPolyrhythmicKeysProps } from './banner-polyrhythmic-keys.interfaces'

const BannerPolyrhythmicKeysBlock: FC<BannerPolyrhythmicKeysProps> = ({ polyrhythmicKeysData }) => {
  const description = formatContent(polyrhythmicKeysData?.content)
  return (
    <Row justifyContent='center'>
      <Box width={['100%', 900, 1400, 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%' alignItems={['start', 'start', 'center']}>
          <Layout flexBasis={[124, 130, 160]} flexShrink={0} />
          <Box width={[400, '100%', '100%', '100%']}>
            <Text
              textAlign={['left', 'left', 'center']}
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={{ _: 'moderate', tablet: 'extra', laptop: 'semiGiant', wide: 'biggest' }}
              lineHeight={['default', 'default', 'semiSmall']}
              color='text.smokyWhite'
            >
              {polyrhythmicKeysData?.title}
            </Text>
          </Box>
          <Layout flexBasis={[16, 24, 32]} flexShrink={0} />
          <Box width={[280, 450, 650]}>
            <Text
              textAlign={['left', 'left', 'center']}
              fontWeight='medium'
              fontSize={['semiMedium', 'regular', 'large']}
              lineHeight='primary'
              color={[
                'text.transparentSmokyWhite',
                'text.transparentSmokyWhite',
                'text.smokyWhite',
              ]}
            >
              {description}
            </Text>
          </Box>
          <Layout flexBasis={72} flexShrink={0} display={['none', 'none', 'flex']} />
          <Box display={['none', 'none', 'flex']}>
            <ArrowDownIcon width={32} height={75} />
          </Box>
          <Layout flexBasis={[48, 70, 289]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { BannerPolyrhythmicKeysBlock }
