import React                                               from 'react'
import { useMemo }                                         from 'react'
import { useEffect }                                       from 'react'
import { useState }                                        from 'react'

import { LearningProcessBottom as LLearningProcessBottom } from '@shared/data'
import { Layout }                                          from '@ui/layout'
import { Row }                                             from '@ui/layout'
import { Repeater }                                        from '@ui/utils'
import { useMockedLearningProcessBottom }                  from '@shared/data'

import { SlideImage }                                      from '../slide-image'
import { SlideText }                                       from '../slide-text'

const SliderBottom = () => {
  const { learningProcessBottom: learningProcessBottomData } = useMockedLearningProcessBottom()
  const [learningProcessBottom, setLearningProcessBottom] = useState<LLearningProcessBottom[]>([])

  useEffect(() => {
    setLearningProcessBottom(learningProcessBottomData)
    // eslint-disable-next-line
  }, [])

  const learningProcessBottomChildren = useMemo(() => {
    let i = 0
    return learningProcessBottom.map(({ pathImage = '', text = '' }, index) => {
      if (index % 2 === 1) {
        i += 1
        return <SlideText text={text} activeIcons={i % 2 === 0 ? 'target' : 'sheetMusic'} />
      }

      return <SlideImage pathImage={pathImage} />
    })
  }, [learningProcessBottom])

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
          learningProcessBottomChildren.map((item) => (
            <>
              {item}
              <Layout flexBasis={40} flexShrink={0} />
            </>
          ))
        }
      </Repeater>
    </Row>
  )
}
export { SliderBottom }
