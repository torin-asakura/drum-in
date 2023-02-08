import React                                 from 'react'
import { FormattedMessage }                  from 'react-intl'
import { useRouter }                         from 'next/router'
import { useEffect }                         from 'react'
import { useState }                          from 'react'
import { useIntl }                           from 'react-intl'

import { TargetAudience as TTargetAudience } from '@shared/data'
import { Box }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Layout }                            from '@ui/layout'
import { Row }                               from '@ui/layout'
import { Text }                              from '@ui/text'
import { useMockedTargetAudience }           from '@shared/data'

import { ItemCard }                          from './item'
import { TargetAudienceProps }               from './target-audience.interfaces'

const TargetAudienceBlock = () => {
  const { formatMessage } = useIntl()
  const router = useRouter()

  const { targetAudience: targetAudienceData } = useMockedTargetAudience()
  const [targetAudience, setTargetAudience] = useState<TTargetAudience[]>([])

  useEffect(() => {
    setTargetAudience(targetAudienceData)
    // eslint-disable-next-line
  }, [])

  let texts: TargetAudienceProps = {
    firstText: '',
    secondText: '',
    thirdText: '',
  }

  for (let i = 0; targetAudience.length >= i; i += 1) {
    if (targetAudience[i] !== undefined && targetAudience[i].pathPage === router.route) {
      texts = {
        firstText: targetAudience[i].firstText,
        secondText: targetAudience[i].secondText,
        thirdText: targetAudience[i].thirdText,
      }
    }
  }

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[32, 46, 60]} />
          <Box width={['100%', 550, 750]}>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'moderate', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_target_audience.this_course_is_for_you_if_you'
                defaultMessage='Этот курс для вас, если вы'
              />
            </Text>
          </Box>
          <Layout flexBasis={[24, 44, 64]} />
          <Box
            width='100%'
            position='relative'
            height={{ _: 309, tablet: 550, laptop: 912, wide: 694 }}
          >
            <ItemCard
              number={formatMessage({
                id: 'landing_target_audience.first',
                defaultMessage: '01',
              })}
              text={texts.firstText}
              positionHorizontal={{ _: 0, tablet: 0, laptop: 0, wide: 0 }}
              positionVertical={{ _: 0, tablet: 0, laptop: 0, wide: 0 }}
              zIndex={3}
            />
            <ItemCard
              number={formatMessage({
                id: 'landing_target_audience.second',
                defaultMessage: '02',
              })}
              text={texts.secondText}
              positionHorizontal={{ _: 45, tablet: 100, laptop: 0, wide: 313 }}
              positionVertical={{ _: 100, tablet: 175, laptop: 309, wide: 196 }}
              zIndex={2}
            />
            <ItemCard
              number={formatMessage({
                id: 'landing_target_audience.third',
                defaultMessage: '03',
              })}
              text={texts.thirdText}
              positionHorizontal={{ _: 89, tablet: 225, laptop: 0, wide: 626 }}
              positionVertical={{ _: 200, tablet: 350, laptop: 618, wide: 400 }}
              zIndex={1}
            />
          </Box>
          <Layout flexBasis={[32, 77, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { TargetAudienceBlock }
