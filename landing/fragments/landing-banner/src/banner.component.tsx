import React                    from 'react'
import { FormattedMessage }     from 'react-intl'
import { useIntl }              from 'react-intl'

import { RhythmSchoolIcon }     from '@ui/icons'
import { MarinaChuprikovaIcon } from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }                 from '@ui/text'

import { ButtonCourse }         from './button-course'
import { TagBlock }             from './tag'

const BannerBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} />
        <Column width='100%'>
          <Layout order={[1, 1, -1]} flexBasis={[52, 61, 70]} />
          <Row display={['none', 'none', 'flex']} order={-1} justifyContent='center'>
            <RhythmSchoolIcon width='100%' height='100%' />
          </Row>
          <Row display={['none', 'none', 'flex']} order={-1} justifyContent='center'>
            <MarinaChuprikovaIcon width='100%' height='100%' />
          </Row>
          <Box order={2} display={['flex', 'flex', 'none']}>
            <Text
              textTransform='uppercase'
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['semiBig', 'semiHuge', 'semiHuge']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage id='landing_banner.rhythm_school' defaultMessage='Школа ритма' />
            </Text>
          </Box>
          <Box order={3} display={['flex', 'flex', 'none']}>
            <Text
              textTransform='uppercase'
              fontFamily='DrukWideCy'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'semiModerate']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_banner.marina_chuprikova'
                defaultMessage='Марины Чуприковой'
              />
            </Text>
          </Box>
          <Layout order={[4, 4, -1]} flexBasis={[16, 24, 60]} />
          <Box width='100%' flexDirection={['column', 'column', 'row']} order={[7, 7, -1]}>
            <TagBlock
              width={[242, 289, 354]}
              text={formatMessage({
                id: 'landing_banner.learn_to_control_the_pace',
                defaultMessage: 'Научитесь контролировать темп',
              })}
            />
            <Layout flexBasis={16} />
            <TagBlock
              width={[266, 317, 386]}
              text={formatMessage({
                id: 'landing_banner.start_picking_up_tunes_by_ear',
                defaultMessage: 'Начнёте подбирать мелодии на слух',
              })}
            />
            <Layout flexBasis={16} />
            <TagBlock
              width={[258, 305, 373]}
              text={formatMessage({
                id: 'landing_banner.improve_your_professionalism',
                defaultMessage: 'Повысите свой профессионализм',
              })}
            />
          </Box>
          <Layout order={[6, 6, -1]} flexBasis={[48, 60, 320]} />
          <Row justifyContent='space-between' order={[5, 5, -1]}>
            <Box width={[271, 450, 720]}>
              <Text
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
                  id='landing_banner.we_are_a_modern_online_rhythm_school'
                  defaultMessage='Мы — современная онлайн-школа ритма. Уже 16 лет мы обучаем наших студентов.'
                />
              </Text>
            </Box>
            <ButtonCourse />
          </Row>
          <Layout flexBasis={[24, 32, 40]} order={[8, 8, -1]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} />
      </Box>
    </Row>
  )
}
export { BannerBlock }
