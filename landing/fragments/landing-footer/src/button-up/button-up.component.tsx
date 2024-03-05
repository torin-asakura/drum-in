import React                    from 'react'
import { FC }                   from 'react'
import { FormattedMessage }     from 'react-intl'

import { Button }               from '@ui/button'
import { Condition }            from '@ui/condition'
import { ArrowRightUpTailIcon } from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Text }                 from '@ui/text'
import { useLocomotiveScroll }  from '@forks/react-locomotive-scroll'

import { FooterProps }          from '../footer.interfaces'

const ButtonUp: FC<FooterProps> = ({ buttonUp = true }) => {
  const { scroll } = useLocomotiveScroll()

  return (
    <>
      <Condition match={buttonUp}>
        <Box position='relative' display={['none', 'none', 'flex']} alignItems='top'>
          <Box onClick={() => scroll.scrollTo('top')}>
            <Button size='massivePaddingGiantHeight' variant='borderWhiteToWhiteBackground'>
              <Text
                textTransform='uppercase'
                fontWeight='semiBold'
                fontSize='regular'
                lineHeight='default'
              >
                <FormattedMessage id='landing_footer.up' />
              </Text>
            </Button>
          </Box>
          <Box position='absolute' left={-100} bottom='30%'>
            <ArrowRightUpTailIcon width={153} height={122} />
          </Box>
        </Box>
      </Condition>
      <Box position='relative' alignSelf='end' display={['flex', 'flex', 'none']}>
        <Box onClick={() => scroll.scrollTo('top')}>
          <Button size='semiMediumPaddingHugeHeight' variant='whiteBackground'>
            <Text
              textTransform='uppercase'
              fontWeight='semiBold'
              fontSize='semiMedium'
              lineHeight='default'
            >
              <FormattedMessage id='landing_footer.up' />
            </Text>
          </Button>
        </Box>
        <Box position='absolute' left={-70} bottom={-50}>
          <ArrowRightUpTailIcon width={91} height={73} />
        </Box>
      </Box>
    </>
  )
}

export { ButtonUp }
