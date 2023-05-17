import React                  from 'react'
import uniqid                 from 'uniqid'
import { useMemo }            from 'react'

import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Repeater }           from '@ui/utils'

import { SlideImage }         from '../slide-image'
import { SlideText }          from '../slide-text'
import { useLearningProcess } from '../data'

const SliderTop = () => {
  const learningProcess = useLearningProcess()?.learningProcess?.firstLine

  const learningProcessTopChildren = useMemo(() => {
    let i = 0
    return learningProcess?.map(({ image, text = '' }, index) => {
      if (index % 2 === 0) {
        i += 1
        return <SlideText text={text} activeIcons={i % 2 === 0 ? 'target' : 'sheetMusic'} />
      }

      return <SlideImage pathImage={image?.sourceUrl} />
    })
  }, [learningProcess])

  return (
    <Row
      data-scroll
      data-scroll-direction='horizontal'
      data-scroll-speed='9'
      data-scroll-target='#learning-process'
      data-scroll-position='left'
    >
      <Repeater quantity={20}>
        {() =>
          learningProcessTopChildren?.map((item) => (
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
export { SliderTop }
