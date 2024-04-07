import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SkillsList }       from './skills-list'
import { SkillsBlockProps } from './skills.interfaces'

const SkillsBlock: FC<SkillsBlockProps> = ({ openingTheRhythm }) => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} />
      <Column width='100%'>
        <Layout flexBasis={[24, 60, 89]} />
        <Box width={[250, '100%', '100%']} display={['flex', 'flex', 'none']}>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['regular', 'moderate', 'moderate']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {openingTheRhythm?.cta?.title}
          </Text>
        </Box>
        <Layout flexBasis={[8, 12, 0]} display={['flex', 'flex', 'none']} />
        <Box width={[235, '100%', 0]} display={['flex', 'flex', 'none']}>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'regular', 'regular']}
            lineHeight='primary'
            color='text.transparentSmokyWhite'
          >
            {openingTheRhythm?.cta?.subtitle}
          </Text>
        </Box>
        <Layout flexBasis={[16, 22, 0]} display={['flex', 'flex', 'none']} />
        <Box
          width={{ _: '100%', tablet: '100%', laptop: '100%', wide: '100%' }}
          height={[200, 360, 500, 750]}
          backgroundColor='background.blackAmber'
          border={['normalSmokyWhite', 'mediumBoldSmokyWhite', 'veryBoldSmokyWhite']}
          borderRadius={['medium', 'larger', 'huge']}
          alignSelf={['start', 'start', 'center']}
          overflow='hidden'
        >
          <Column width='100%'>
            <Layout flexBasis={92} display={['none', 'none', 'flex']} />
            <Box display={['none', 'none', 'flex']} justifyContent='center'>
              <Text
                textAlign='center'
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize='big'
                lineHeight='default'
                color='text.smokyWhite'
              >
                {openingTheRhythm?.cta?.title}
              </Text>
            </Box>
            <Layout flexBasis={24} display={['none', 'none', 'flex']} />
            <Box alignSelf='center' width={400} display={['none', 'none', 'flex']}>
              <Text
                textAlign='center'
                fontWeight='medium'
                fontSize='large'
                lineHeight='primary'
                color='text.gray'
              >
                {openingTheRhythm?.cta?.subtitle}
              </Text>
            </Box>
            <SkillsList images={openingTheRhythm?.cta?.skillsImage} />
          </Column>
        </Box>
        <Layout flexBasis={[24, 72, 120]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} />
    </Box>
  </Row>
)

export { SkillsBlock }
