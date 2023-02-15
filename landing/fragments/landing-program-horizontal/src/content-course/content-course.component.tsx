import React                                 from 'react'
import { FormattedMessage }                  from 'react-intl'
import { useRouter }                         from 'next/router'
import { useEffect }                         from 'react'
import { useState }                          from 'react'

import { CoursePrograms as CCoursePrograms } from '@shared/data'
import { BullhornIcon }                      from '@ui/icons'
import { LightningIcon }                     from '@ui/icons'
import { ProgressIcon }                      from '@ui/icons'
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
    <Box position='relative' flexShrink={0} height='100%' width={3630}>
      <Layout flexBasis={695} flexShrink={0} />
      <Column flexShrink={0} justifyContent='center' width='100%'>
        <Row flexShrink={0} alignItems='end'>
          <Box flexDirection='column' flexShrink={0}>
            <Box>
              <Box>
                <BullhornIcon width={83} height={74} />
              </Box>
              <Layout flexBasis={27} flexShrink={0} />
              <Column alignItems='end'>
                <Box>
                  <Text
                    whiteSpace='nowrap'
                    textTransform='uppercase'
                    fontFamily='secondary'
                    fontWeight='bold'
                    fontSize='moderate'
                    lineHeight='default'
                    color='text.smokyWhite'
                  >
                    {texts.numberVideoTutorials}
                  </Text>
                </Box>
                <Layout flexBasis={16} flexShrink={0} />
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize='large'
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
          <Layout flexBasis={442} flexShrink={0} />
          <Column width={262} flexShrink={0}>
            {texts.secondListOfTopics.split(';').map((element) => (
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize='large'
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
        <Layout flexBasis={153} flexShrink={0} />
        <Row flexShrink={0}>
          <Layout flexBasis={545} flexShrink={0} />
          <Box width={504} flexShrink={0} flexDirection='column'>
            <Layout flexBasis={83} flexShrink={0} />
            <Column>
              {texts.firstListOfTopics.split(';').map((element) => (
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize='large'
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
          <Layout flexBasis={375} flexShrink={0} />
          <Box flexShrink={0} flexDirection='column'>
            <Layout flexBasis={73} flexShrink={0} />
            <Box alignItems='center'>
              <Box>
                <LightningIcon width={120} height={87} />
              </Box>
              <Layout flexBasis={16} flexShrink={0} />
              <Box>
                <Text
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize='moderate'
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program_horizontal.bonus' defaultMessage='Бонус' />
                </Text>
              </Box>
            </Box>
          </Box>
          <Layout flexBasis={420} flexShrink={0} />
          <Column width={293} flexShrink={0}>
            {texts.thirdListOfTopics.split(';').map((element) => (
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize='large'
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
      <Layout flexBasis={490} flexShrink={0} />
      <Box position='absolute' top='35%' left={0}>
        <ProgressIcon width={3630} height='auto' />
      </Box>
    </Box>
  )
}

export { ContentCourse }
