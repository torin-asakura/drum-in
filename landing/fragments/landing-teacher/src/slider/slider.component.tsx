import React                     from 'react'
import { FC }                    from 'react'
import { Children }              from 'react'
import { useMemo }               from 'react'

import { Condition }             from '@ui/condition'
import { DrumsticksIcon }        from '@ui/icons'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Slider }                from '@ui/slider'
import { SwiperSlide }           from '@ui/slider'

import { Slide }                 from './slide'
import { SliderBlockProps }      from './slider.interfaces'
import { useViewportBreakpoint } from './hooks'

const SliderBlock: FC<SliderBlockProps> = ({ gallery }) => {
  const { isWideViewport, isMobileViewport } = useViewportBreakpoint()

  const teacherChildren = useMemo(
    () =>
      gallery?.map((item) => (
        <Slide pathImage={item?.image?.node?.sourceUrl || ''} alt={item?.alt || ''} />
      )),
    [gallery]
  )

  return (
    <>
      <Box position='relative'>
        <Box position='absolute' top={-109} right={247} display={['none', 'none', 'flex']}>
          <DrumsticksIcon width={182} height={182} />
        </Box>
        <Condition
          match={isWideViewport && teacherChildren !== [] && teacherChildren !== undefined}
        >
          <Box>
          <Slider
            slidesPerView={2}
            allowTouchMove
            clName='teacher-slider'
            spaceBetween={120}
            centeredSlides
            mousewheel
            forceToAxis
            grabCursor
            loop
          >
            {Children.map(teacherChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
          </Box>
        </Condition>

        <Condition
          match={!isWideViewport && !isMobileViewport && teacherChildren !== [] && teacherChildren !== undefined}
        >
          <Box>
            <Slider
              slidesPerView={2}
              allowTouchMove
              clName='teacher-slider'
              spaceBetween={60}
              centeredSlides
              mousewheel
              forceToAxis
              grabCursor
              loop
            >
              {Children.map(teacherChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Box>
        </Condition>

        {/*<Condition*/}
        {/*  match={*/}
        {/*    !isWideViewport &&*/}
        {/*    !isMobileViewport &&*/}
        {/*    teacherChildren !== [] &&*/}
        {/*    teacherChildren !== undefined*/}
        {/*  }*/}
        {/*>*/}
        {/*  <Box position='relative' fill>*/}
        {/*  <Slider*/}
        {/*    slidesPerView='auto'*/}
        {/*    allowTouchMove*/}
        {/*    clName='teacher-slider'*/}
        {/*    spaceBetween={0}*/}
        {/*    centeredSlides*/}
        {/*    mousewheel*/}
        {/*    forceToAxis*/}
        {/*    grabCursor*/}
        {/*    loop*/}
        {/*  >*/}
        {/*    {Children.map(teacherChildren, (child) => (*/}
        {/*      <SwiperSlide>{child}</SwiperSlide>*/}
        {/*    ))}*/}
        {/*  </Slider>*/}
        {/*  </Box>*/}
        {/*</Condition>*/}
      </Box>

      <Box>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Condition
          match={isMobileViewport && teacherChildren !== [] && teacherChildren !== undefined}
        >
          <Slider
            slidesPerView='auto'
            clName='teacher-slider'
            spaceBetween={20}
            allowTouchMove
            loop
          >
            {Children.map(teacherChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Condition>
      </Box>
    </>
  )
}

export { SliderBlock }
