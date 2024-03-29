import styled                  from '@emotion/styled'

import React                   from 'react'
import { FC }                  from 'react'

import { Button }              from '@ui/button'
import { ComputerMouseIcon }   from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'
import { useHover }            from '@ui/utils'

import { ButtonCourseProps }   from './button-course.intefaces'

const ButtonCourse: FC<ButtonCourseProps> = ({ heroData }) => {
  const { scroll } = useLocomotiveScroll()
  const [hoverIcon, hoverIconProps] = useHover()

  const FirstIcon = styled(Box)({
    animationName: hoverIcon ? 'firstAnimationMouse' : 'firstRevertAnimationMouse',
    animationDuration: '0.9s',
    animationFillMode: 'forwards',
    animationDelay: hoverIcon ? '0.6s' : '0s',
  })
  const SecondIcon = styled(Box)({
    animationName: hoverIcon ? 'secondAnimationMouse' : 'secondRevertAnimationMouse',
    animationDuration: '1.2s',
    animationFillMode: 'forwards',
    animationDelay: '0.2s',
  })
  const ThirdIcon = styled(Box)({
    animationName: hoverIcon ? 'thirdAnimationMouse' : 'thirdRevertAnimationMouse',
    animationDuration: '0.8s',
    animationFillMode: 'forwards',
    animationDelay: hoverIcon ? '0s' : '0.6s',
  })

  return (
    <Box
      display={['none', 'none', 'flex']}
      {...hoverIconProps}
      boxSizing='content-box'
      width={230}
      height={56}
      borderRadius='big'
      border={hoverIcon ? 'veryBoldTransparentWhite' : 'veryBoldTransparent'}
      onClick={() => scroll.scrollTo('#choose-course', { offset: -70 })}
    >
      <Button size='mediumPaddingNormalHeight' variant='darkToPurpleBackground' fill>
        <Row>
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='regular'
            lineHeight='primary'
          >
            {heroData?.scrollButton}
          </Text>
        </Row>
        <Box
          width={40}
          height={40}
          backgroundColor='background.smokyWhite'
          borderRadius='semiMedium'
          overflow='hidden'
          position='relative'
        >
          <FirstIcon
            position='absolute'
            left={0}
            top='-100%'
            width={40}
            height={40}
            alignItems='center'
            justifyContent='center'
          >
            <ComputerMouseIcon width={24} height={24} />
          </FirstIcon>
          <SecondIcon
            position='absolute'
            left={0}
            top='-100%'
            width={40}
            height={40}
            alignItems='center'
            justifyContent='center'
          >
            <ComputerMouseIcon width={24} height={24} />
          </SecondIcon>
          <ThirdIcon
            position='absolute'
            left={0}
            top='100%'
            width={40}
            height={40}
            alignItems='center'
            justifyContent='center'
          >
            <ComputerMouseIcon width={24} height={24} />
          </ThirdIcon>
        </Box>
      </Button>
    </Box>
  )
}
export { ButtonCourse }
