import React                                   from 'react'
import { useMemo }                             from 'react'
import { useEffect }                           from 'react'
import { useState }                            from 'react'

import { LearningProcess as LLearningProcess } from '@shared/data'
import { Layout }                              from '@ui/layout'
import { Row }                                 from '@ui/layout'
import { Repeater }                            from '@ui/utils'
import { useMockedLearningProcessTop }         from '@shared/data'

import { SlideImage }                          from '../slide-image'
import { SlideText }                           from '../slide-text'

const SliderTop = () => {
  const { learningProcessTop: learningProcessTopData } = useMockedLearningProcessTop()
  const [learningProcessTop, setLearningProcessTop] = useState<LLearningProcess[]>([])

  useEffect(() => {
    setLearningProcessTop(learningProcessTopData)
    // eslint-disable-next-line
  }, [])

  const learningProcessTopChildren = useMemo(() => {
    let i = 0
    return learningProcessTop.map(({ pathImage = '', text = '' }, index) => {
      if (index % 2 === 0) {
        i += 1
        return <SlideText text={text} activeIcons={i % 2 === 0 ? 'target' : 'sheetMusic'} />
      }

      return <SlideImage pathImage={pathImage} />
    })
  }, [learningProcessTop])

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
          learningProcessTopChildren.map((item) => (
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
export { SliderTop }
