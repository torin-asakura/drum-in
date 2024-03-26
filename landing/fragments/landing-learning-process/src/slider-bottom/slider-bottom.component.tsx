import React                  from 'react'
import uniqid                 from 'uniqid'
import { useMemo }            from 'react'

import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Repeater }           from '@ui/utils'

import { SlideImage }         from '../slide-image'
import { SlideText }          from '../slide-text'

const SliderBottom = ({lowerSliderData}) => {

  const learningProcessBottomChildren = useMemo(() => {
    return lowerSliderData?.map(({ image, text },index) => {

      return (
        <>
          <SlideText text={text}  activeIcons={index % 2 === 0 ? 'target' : 'sheetMusic'}/>
          <Layout flexBasis={40} flexShrink={0}/>
          <SlideImage pathImage={image?.node.sourceUrl} />
        </>
      )
    })
  }, [lowerSliderData])

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
