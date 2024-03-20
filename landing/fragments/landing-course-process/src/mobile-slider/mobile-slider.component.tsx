import React           from 'react'

import { ImageBlock }  from '@ui/image'
import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Slider }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'
import { Text }        from '@ui/text'

const MobileSlider = ({ processEducation }) =>  (
    <Column>
      <Box display={['flex', 'flex', 'none']}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Slider
          clName='course-process-slider'
          spaceBetween={16}
          slidesPerView='auto'
          slidesOffsetAfter={16}
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
                    {processEducation?.[0]?.title}
                  </Text>
                </Box>
                <Layout flexGrow={3} />
                <Box alignSelf='end' width={[200, 220, 0]} height={[107, 120, 0]}>
                  <ImageBlock
                    alt={processEducation?.[0]?.picture?.alt}
                    src={processEducation?.[0]?.picture?.image?.node?.sourceUrl}
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
                    {processEducation?.[1]?.title}
                  </Text>
                </Box>
                <Layout flexGrow={3} />
                <Box alignSelf='end' width={[178, 198, 0]} height={[140, 155, 0]}>
                  <ImageBlock
                    alt={processEducation?.[1]?.picture?.alt}
                    src={processEducation?.[1]?.picture?.image?.node?.sourceUrl}
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
                    {processEducation?.[2]?.title}
                  </Text>
                </Box>
                <Layout flexGrow={3} />
                <Box alignSelf='end' width={[112, 132, 0]} height={[150, 165, 0]}>
                  <ImageBlock
                    alt={processEducation?.[2]?.picture?.alt}
                    src={processEducation?.[2]?.picture?.image?.node?.sourceUrl}
                  />
                </Box>
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


export { MobileSlider }
