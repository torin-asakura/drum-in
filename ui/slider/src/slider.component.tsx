import React          from 'react'
import { useState }   from 'react'
import { useRef }     from 'react'
import { useEffect }  from 'react'

import { Button }     from '@ui/button'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'

import { Dot }        from './dot'
import { ArrowLeft }  from './arrow-left'
import { ArrowRight } from './arrow-right'

const Slider = ({ reviews = [] }) => {
  const [step, setStep] = useState<number>(0)
  const left = useRef(null)
  const right = useRef(null)

  const rightBorder = reviews.length - 2 > 0 ? reviews.length - 2 : 1

  const slideRight = () => {
    if (step + 1 > rightBorder) {
      setStep(0)
      return
    }
    setStep(step + 1)
  }
  const slideLeft = () => {
    if (step - 1 < 0) {
      setStep(rightBorder)
      return
    }
    setStep(step - 1)
  }

  useEffect(() => {
    if (reviews.length > 0) {
      ;(left as any).current.innerHTML = (reviews[step] as any).content
      if (reviews.length > 1) {
        ;(right.current as any).innerHTML = (reviews[step + 1] as any).content
      }
    }
  }, [reviews, left, right, step])

  return (
    <Column fill>
      <Row justifyContent='center'>
        <Layout flexBasis={30} />
        <Layout width='100%' overflow='hidden' ref={left} />
        <Layout display={['none', 'none', 'flex']} ref={right} />
        <Layout flexBasis={30} />
      </Row>
      <Layout flexBasis={120} />
      <Row>
        <Layout flexBasis={30} />
        <Layout height='100%' alignItems='center'>
          <Button size='ghost' variant='ghost' onClick={slideLeft}>
            <ArrowLeft />
          </Button>
        </Layout>
        <Row justifyContent='center'>
          {[...Array(rightBorder + 1)].map((i, index) => (
            <>
              <Dot active={index === step} />
              <Layout flexBasis={16} />
            </>
          ))}
        </Row>
        <Layout height='100%' alignItems='center'>
          <Button size='ghost' variant='ghost' onClick={slideRight}>
            <ArrowRight />
          </Button>
        </Layout>
        <Layout flexBasis={30} />
      </Row>
    </Column>
  )
}

export { Slider }
