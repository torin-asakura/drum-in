import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Slider }           from '@ui/slider'
import { SwiperSlide }      from '@ui/slider'
import { Text }             from '@ui/text'

const DesktopSlider = () => (
  <Column>
    <Box display={['none', 'none', 'flex']}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Slider
        clName='course-process-slider'
        spaceBetween={40}
        slidesPerView='auto'
        slidesOffsetAfter={40}
      >
        <SwiperSlide>
          <Box
            width={[300, 350, 430]}
            height={[286, 330, 450]}
            borderRadius={['big', 'extra', 'bigger']}
            border={['normalSmokyWhite', 'normalSmokyWhite', 'mediumBoldSmokyWhite']}
          >
            <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
            <Column>
              <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['large', 'moderate', 'increased']}
                  lineHeight={['small', 'small', 'default']}
                  color='text.smokyWhite'
                >
                  <FormattedMessage
                    id='landing_course_process.weekly_meetings_in_zoom'
                    defaultMessage='Еженедельные встречи в Zoom'
                  />
                </Text>
              </Box>
              <Layout flexGrow={3} />
              <Box alignSelf='end' width={300} height={161}>
                <ImageBlock src='img/img-1-course-process.png' />
              </Box>
              <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={[300, 350, 430]}
            height={[286, 330, 450]}
            borderRadius={['big', 'extra', 'bigger']}
            backgroundColor='background.smokyWhite'
            border={['normalSmokyWhite', 'normalSmokyWhite', 'mediumBoldSmokyWhite']}
          >
            <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
            <Column>
              <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['large', 'moderate', 'increased']}
                  lineHeight={['small', 'small', 'default']}
                  color='text.blackAmber'
                >
                  <FormattedMessage
                    id='landing_course_process.constant_support'
                    defaultMessage='Постоянная поддержка'
                  />
                </Text>
              </Box>
              <Layout flexGrow={3} />
              <Box alignSelf='end' width={240} height={189}>
                <ImageBlock src='img/img-2-course-process.png' />
              </Box>
              <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            width={900}
            height={450}
            borderRadius={['big', 'extra', 'bigger']}
            border='mediumBoldSmokyWhite'
          >
            <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
              <Row justifyContent='space-between'>
                <Column>
                  <Box width={345}>
                    <Text
                      fontWeight='medium'
                      fontSize={['large', 'moderate', 'increased']}
                      lineHeight={['small', 'small', 'default']}
                      color='text.smokyWhite'
                    >
                      <FormattedMessage
                        id='landing_course_process.capacious_video_tutorials_on_youtube'
                        defaultMessage='Емкие видеоуроки на YouTube'
                      />
                    </Text>
                  </Box>
                  <Layout flexBasis={24} />
                  <Box width={436}>
                    <Text
                      fontWeight='medium'
                      fontSize='regular'
                      lineHeight='medium'
                      color='text.transparentSmokyWhite'
                    >
                      <FormattedMessage
                        id='landing_course_process.do_practical_tasks'
                        defaultMessage='Выполняете практические задания, получаете обратную связь и закрепляете знания'
                      />
                    </Text>
                  </Box>
                </Column>
                <Box width={288} height={384} borderRadius='big'>
                  <ImageBlock src='img/img-3-course-process.png' />
                </Box>
              </Row>
              <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
          </Box>
        </SwiperSlide>
      </Slider>
    </Box>
    <Layout flexBasis={[24, 84, 163]} />
  </Column>
)

export { DesktopSlider }
