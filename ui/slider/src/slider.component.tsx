import React         from 'react'
import { useState }  from 'react'
import { useRef }    from 'react'
import { useEffect } from 'react'
import styled        from '@emotion/styled'

import { useHover }  from '@ui/utils'
import { Button }    from '@ui/button'
import { Row }       from '@ui/layout'
import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'

const Slider = ({ reviews = [] }) => {
  const [step, setStep] = useState<number>(0)
  const left = useRef(null)
  const right = useRef(null)

  const slideRight = () => {
    if (step + 1 > reviews.length - 2) {
      setStep(0)
      return
    }
    setStep(step + 1)
  }
  const slideLeft = () => {
    if (step - 1 < 0) {
      setStep(reviews.length - 2)
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

  const ArrowRight = () => {
    const [hover, hoverProps] = useHover()

    const StyledArrow = styled(Box)<{ hover: boolean }>(({ theme, hover }) => ({
      width: 0,
      height: 0,
      borderTop: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderLeft: `20px solid ${hover ? theme.colors.button.primary.hover : theme.colors.dullRed}`,
    }))

    return <StyledArrow hover={hover as boolean} {...hoverProps} />
  }

  const ArrowLeft = () => {
    const [hover, hoverProps] = useHover()

    const StyledArrow = styled(Box)<{ hover: boolean }>(({ theme, hover }) => ({
      width: 0,
      height: 0,
      borderTop: '15px solid transparent',
      borderBottom: '15px solid transparent',
      borderRight: `20px solid ${hover ? theme.colors.button.primary.hover : theme.colors.dullRed}`,
    }))

    return <StyledArrow hover={hover as boolean} {...hoverProps} />
  }

  return (
    <Row justifyContent='center'>
      <Layout height='100%' alignItems='center'>
        <Button size='ghost' variant='ghost' onClick={slideLeft}>
          <ArrowLeft />
        </Button>
      </Layout>
      <Layout flexBasis={30} />
      <Layout ref={left} />
      <Layout flexBasis={[0, 0, 92]} />
      <Layout ref={right} />
      <Layout flexBasis={30} />
      <Layout height='100%' alignItems='center'>
        <Button size='ghost' variant='ghost' onClick={slideRight}>
          <ArrowRight />
        </Button>
      </Layout>
    </Row>
  )
}

export { Slider }
