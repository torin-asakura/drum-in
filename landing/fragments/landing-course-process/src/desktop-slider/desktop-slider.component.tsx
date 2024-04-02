import React                         from 'react'
import { FC }                        from 'react'

import { ProcessEducationDataProps } from '@globals/data'
import { ImageBlock }                from '@ui/image'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Slider }                    from '@ui/slider'
import { SwiperSlide }               from '@ui/slider'
import { Text }                      from '@ui/text'

export interface DesktopSliderProps {
  processEducation?: ProcessEducationDataProps | null
}

const DesktopSlider: FC<DesktopSliderProps> = ({ processEducation }) => (
  <Column width='100%'>
    <Box display={['none', 'none', 'flex']}>
      <Slider
        clName='course-process-slider'
        spaceBetween={40}
        slidesPerView='auto'
        slidesOffsetAfter={40}
        slidesOffsetBefore={40}
        mousewheel
        grabCursor
        forceToAxis
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
                  {processEducation?.content?.[0]?.title}
                </Text>
              </Box>
              <Layout flexGrow={3} />
              <Box alignSelf='end' width={300} height={161}>
                <ImageBlock
                  alt={processEducation?.content?.[0]?.picture?.alt || ''}
                  src={processEducation?.content?.[0]?.picture?.image?.node?.sourceUrl || ''}
                />
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
                  {processEducation?.content?.[1]?.title}
                </Text>
              </Box>
              <Layout flexGrow={3} />
              <Box alignSelf='end' width={240} height={189}>
                <ImageBlock
                  alt={processEducation?.content?.[1]?.picture?.alt || ''}
                  src={processEducation?.content?.[1]?.picture?.image?.node?.sourceUrl || ''}
                />
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
                      {processEducation?.content?.[2]?.title}
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
                      {processEducation?.content?.[2]?.text}
                    </Text>
                  </Box>
                </Column>
                <Box width={288} height={384} borderRadius='big'>
                  <ImageBlock
                    alt={processEducation?.content?.[2]?.picture?.alt || ''}
                    src={processEducation?.content?.[2]?.picture?.image?.node?.sourceUrl || ''}
                  />
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
