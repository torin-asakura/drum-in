import React                                 from 'react'
import { FormattedMessage }                  from 'react-intl'
import { useRouter }                         from 'next/router'
import { useEffect }                         from 'react'
import { useState }                          from 'react'

import { CoursePrograms as CCoursePrograms } from '@shared/data'
import { BullhornIcon }                      from '@ui/icons'
import { LightningIcon }                     from '@ui/icons'
import { Box }                               from '@ui/layout'
import { Column }                            from '@ui/layout'
import { Layout }                            from '@ui/layout'
import { Row }                               from '@ui/layout'
import { Space }                             from '@ui/text'
import { Text }                              from '@ui/text'
import { useMockedCoursePrograms }           from '@shared/data'

import { ContentCourseProps }                from './content-course.interfaces'

const ContentCourse = () => {
  const router = useRouter()

  const { coursePrograms: courseProgramsData } = useMockedCoursePrograms()
  const [coursePrograms, setCoursePrograms] = useState<CCoursePrograms[]>([])

  useEffect(() => {
    setCoursePrograms(courseProgramsData)
    // eslint-disable-next-line
  }, [])

  let texts: ContentCourseProps = {
    numberVideoTutorials: '',
    numberOfMonths: '',
    firstListOfTopics: '',
    secondListOfTopics: '',
    thirdListOfTopics: '',
  }

  for (let i = 0; coursePrograms.length >= i; i += 1) {
    if (coursePrograms[i] !== undefined && coursePrograms[i].pathPage === router.route) {
      texts = {
        numberVideoTutorials: coursePrograms[i].numberVideoTutorials,
        numberOfMonths: coursePrograms[i].numberOfMonths,
        firstListOfTopics: coursePrograms[i].firstListOfTopics,
        secondListOfTopics: coursePrograms[i].secondListOfTopics,
        thirdListOfTopics: coursePrograms[i].thirdListOfTopics,
      }
    }
  }

  return (
    <Column
      flexShrink={0}
      width={{ _: 0, tablet: 0, laptop: 2190, wide: 2430 }}
      justifyContent='center'
    >
      <Row flexShrink={0} alignItems='end'>
        <Box flexDirection='column' flexShrink={0}>
          <Box>
            <Box width={{ _: 0, tablet: 0, laptop: 73, wide: 83 }}>
              <BullhornIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={{ _: 0, tablet: 0, laptop: 20, wide: 27 }} flexShrink={0} />
            <Column alignItems='end'>
              <Box>
                <Text
                  whiteSpace='nowrap'
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize={{
                    _: 'semiModerate',
                    tablet: 'semiModerate',
                    laptop: 'semiModerate',
                    wide: 'moderate',
                  }}
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  {texts.numberVideoTutorials}
                </Text>
              </Box>
              <Layout flexBasis={{ _: 0, tablet: 0, laptop: 12, wide: 16 }} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {texts.numberOfMonths}
                </Text>
              </Box>
            </Column>
          </Box>
          <Layout flexBasis={93} flexShrink={0} />
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 335, wide: 442 }} flexShrink={0} />
        <Column width={{ _: 0, tablet: 0, laptop: 230, wide: 262 }} flexShrink={0}>
          {texts.secondListOfTopics.split(';').map((element) => (
            <Box>
              <Text
                fontWeight='medium'
                fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                lineHeight='primary'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program_horizontal.dot' defaultMessage='•' />
                <Space />
                {element}
              </Text>
            </Box>
          ))}
        </Column>
      </Row>
      <Layout flexBasis={{ _: 0, tablet: 0, laptop: 130, wide: 153 }} flexShrink={0} />
      <Row flexShrink={0}>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 425, wide: 545 }} flexShrink={0} />
        <Box
          width={{ _: 0, tablet: 0, laptop: 440, wide: 504 }}
          flexShrink={0}
          flexDirection='column'
        >
          <Layout flexBasis={83} flexShrink={0} />
          <Column>
            {texts.firstListOfTopics.split(';').map((element) => (
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program_horizontal.dot' defaultMessage='•' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Column>
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 350, wide: 375 }} flexShrink={0} />
        <Box flexShrink={0} flexDirection='column'>
          <Layout flexBasis={73} flexShrink={0} />
          <Box alignItems='center'>
            <Box width={{ _: 0, tablet: 0, laptop: 110, wide: 120 }}>
              <LightningIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={16} flexShrink={0} />
            <Box>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={{ _: 'small', tablet: 'small', laptop: 'small', wide: 'moderate' }}
                lineHeight='default'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program_horizontal.bonus' defaultMessage='Бонус' />
              </Text>
            </Box>
          </Box>
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 255, wide: 420 }} flexShrink={0} />
        <Column width={{ _: 0, tablet: 0, laptop: 255, wide: 293 }} flexShrink={0}>
          {texts.thirdListOfTopics.split(';').map((element) => (
            <Box>
              <Text
                fontWeight='medium'
                fontSize={{ _: 'regular', tablet: 'regular', laptop: 'regular', wide: 'large' }}
                lineHeight='primary'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program_horizontal.dot' defaultMessage='•' />
                <Space />
                {element}
              </Text>
            </Box>
          ))}
        </Column>
      </Row>
    </Column>
  )
}

export { ContentCourse }
