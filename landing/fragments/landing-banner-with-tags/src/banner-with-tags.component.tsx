import React                    from 'react'
import { FormattedMessage }     from 'react-intl'
import { useIntl }              from 'react-intl'

import { ArrowRightBottomIcon } from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }                 from '@ui/text'

import { TagBlock }             from './tag'

const BannerWithTagsBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[126, 120, 221]} flexShrink={0} />
          <Row
            alignItems='end'
            justifyContent={{ _: 'start', tablet: 'start', laptop: 'center', wide: 'start' }}
          >
            <Layout
              flexBasis={45}
              display={{ _: 'none', tablet: 'none', laptop: 'none', wide: 'flex' }}
            />
            <Box display={{ _: 'none', tablet: 'none', laptop: 'none', wide: 'flex' }}>
              <ArrowRightBottomIcon width={205} height={155} />
            </Box>
            <Layout
              flexBasis={65}
              display={{ _: 'none', tablet: 'none', laptop: 'none', wide: 'flex' }}
            />
            <Column alignItems={['start', 'start', 'center']}>
              <Box order={[1, 1, 0]}>
                <Text
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize={{ _: 'moderate', tablet: 'huge', laptop: 'gigantic', wide: 'biggest' }}
                  lineHeight={['default', 'default', 'semiSmall']}
                  color='text.smokyWhite'
                >
                  <FormattedMessage
                    id='landing_banner_with_tags.connacol'
                    defaultMessage='Коннакол'
                  />
                </Text>
              </Box>
              <Layout order={[2, 2, 0]} flexBasis={[16, 24, 32]} flexShrink={0} />
              <Box order={[5, 5, 0]} flexDirection={['column', 'column', 'row']}>
                <TagBlock
                  text={formatMessage({
                    id: 'landing_banner_with_tags.develops_tempo_control',
                    defaultMessage: 'Развивает контроль темпа',
                  })}
                />
                <Layout flexBasis={16} flexShrink={0} />
                <TagBlock
                  text={formatMessage({
                    id: 'landing_banner_with_tags.forms_a_sense_of_the_boundaries_of_the_beat',
                    defaultMessage: 'формирует ощущение границ такта',
                  })}
                />
                <Layout flexBasis={16} flexShrink={0} />
                <TagBlock
                  text={formatMessage({
                    id: 'landing_banner_with_tags.forms_the_breath',
                    defaultMessage: 'формирует дыхание',
                  })}
                />
              </Box>
              <Layout order={[4, 4, 0]} flexBasis={[36, 44, 32]} flexShrink={0} />
              <Box order={[3, 3, 0]} width={[285, 450, 620]}>
                <Text
                  textAlign={['left', 'left', 'center']}
                  fontWeight='medium'
                  fontSize={['semiMedium', 'semiRegular', 'large']}
                  lineHeight='primary'
                  color={[
                    'text.transparentSmokyWhite',
                    'text.transparentSmokyWhite',
                    'text.smokyWhite',
                  ]}
                >
                  <FormattedMessage
                    id='landing_banner_with_tags.konokol_is_one_of_the_most_convenient'
                    defaultMessage='Конокол является одной из самых удобных и простых форм для совершенствования чувства ритма'
                  />
                </Text>
              </Box>
            </Column>
          </Row>
          <Layout flexBasis={[36, 70, 415]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}
export { BannerWithTagsBlock }
