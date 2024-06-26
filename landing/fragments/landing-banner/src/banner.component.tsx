import React                    from 'react'
import { FC }                   from 'react'
import { FormattedMessage }     from 'react-intl'

import { RhythmSchoolIcon }     from '@ui/icons'
import { MarinaChuprikovaIcon } from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { Text }                 from '@ui/text'

import { BannerBlockProps }     from './banner.interfaces'
import { ButtonCourse }         from './button-course'
import { TagBlock }             from './tag'

const BannerBlock: FC<BannerBlockProps> = ({ heroData }) => (
  <Row justifyContent='center' height={['100%', '100%', '100vh']}>
    <Box width='100%'>
      <Layout flexBasis={[20, 30, 40]} />
      <Column width='100%'>
        <Layout order={[1, 1, -1]} flexBasis={[124, 133, 179]} />
        <Row display={['none', 'none', 'flex']} order={-1} justifyContent='center'>
          <RhythmSchoolIcon width='100%' height='100%' />
        </Row>
        <Row display={['none', 'none', 'flex']} order={-1} justifyContent='center'>
          <MarinaChuprikovaIcon width='100%' height='100%' />
        </Row>
        <Box order={2} display={['flex', 'flex', 'none']}>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['semiBig', 'semiHuge', 'semiHuge']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage id='landing_banner.rhythm_school' />
          </Text>
        </Box>
        <Box order={3} display={['flex', 'flex', 'none']}>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['medium', 'semiModerate', 'semiModerate']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage id='landing_banner.marina_chuprikova' />
          </Text>
        </Box>
        <Layout order={[4, 4, -1]} flexBasis={[16, 24, 60]} />
        <Box width='100%' flexDirection={['column', 'column', 'row']} order={[7, 7, -1]}>
          {heroData?.benefits?.map((el) => (
            <React.Fragment key={el?.benefit?.substring(0, 3)}>
              <TagBlock text={el?.benefit} />
              <Layout flexBasis={16} />
            </React.Fragment>
          ))}
        </Box>
        <Layout order={[6, 6, -1]} flexBasis={[48, 60, 320]} flexGrow={[0, 0, 1]} />
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
              {heroData?.about}
            </Text>
          </Box>
          <ButtonCourse heroData={heroData} />
        </Row>
        <Layout flexBasis={[24, 32, 40]} order={[8, 8, -1]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} />
    </Box>
  </Row>
)

export { BannerBlock }
