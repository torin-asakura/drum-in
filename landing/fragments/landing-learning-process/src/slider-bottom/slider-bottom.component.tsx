import React                 from 'react'
import uniqid                from 'uniqid'
import { FC }                from 'react'
import { useMemo }           from 'react'

import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Repeater }          from '@ui/utils'

import { SlideImage }        from '../slide-image'
import { SlideText }         from '../slide-text'
import { SliderBottomProps } from './slider-bottom.interfaces'

const SliderBottom: FC<SliderBottomProps> = ({ lowerSliderData }) => {
  const learningProcessBottomChildren = useMemo(
    () =>
      lowerSliderData?.map((item, index) => (
        <>
          <SlideText text={item?.text} activeIcons={index % 2 === 0 ? 'target' : 'sheetMusic'} />
          <Layout flexBasis={40} flexShrink={0} />
          <SlideImage pathImage={item?.image?.node.sourceUrl} />
        </>
      )),
    [lowerSliderData]
  )

  return (
    <Row
      data-scroll
      data-scroll-direction='horizontal'
      data-scroll-speed='-9'
      data-scroll-target='#learning-process'
      data-scroll-position='bottom'
    >
      <Repeater quantity={20}>
        {() =>
          learningProcessBottomChildren?.map((item) => (
            <React.Fragment key={uniqid()}>
              {item}
              <Layout flexBasis={40} flexShrink={0} />
            </React.Fragment>
          ))
        }
      </Repeater>
    </Row>
  )
}
export { SliderBottom }
