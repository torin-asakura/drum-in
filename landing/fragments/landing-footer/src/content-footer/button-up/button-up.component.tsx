import React                    from 'react'
import { FormattedMessage }     from 'react-intl'

import { Button }               from '@ui/button'
import { ArrowRightUpTailIcon } from '@ui/icons'
import { Box }                  from '@ui/layout'
import { Text }                 from '@ui/text'
import { useLocomotiveScroll }  from '@forks/react-locomotive-scroll'

const ButtonUp = () => {
  const { scroll } = useLocomotiveScroll()

  return (
    <>
      <Box position='relative' display={['none', 'none', 'flex']}>
        <Box>
          <Button
            size='massivePaddingGiantHeight'
            variant='borderWhiteToWhiteBackground'
            onClick={() => scroll.scrollTo('top')}
          >
            <Text
              textTransform='uppercase'
              fontWeight='semiBold'
              fontSize='regular'
              lineHeight='default'
            >
              <FormattedMessage id='landing_footer.up' defaultMessage='вверх' />
            </Text>
          </Button>
        </Box>
        <Box position='absolute' left={-100} bottom='30%'>
          <ArrowRightUpTailIcon width={153} height={122} />
        </Box>
      </Box>
      <Box position='relative' alignSelf='end' display={['flex', 'flex', 'none']}>
        <Box>
          <Button
            size='semiMediumPaddingHugeHeight'
            variant='whiteBackground'
            onClick={() => scroll.scrollTo('top')}
          >
            <Text
              textTransform='uppercase'
              fontWeight='semiBold'
              fontSize='semiMedium'
              lineHeight='default'
            >
              <FormattedMessage id='landing_footer.up' defaultMessage='вверх' />
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
