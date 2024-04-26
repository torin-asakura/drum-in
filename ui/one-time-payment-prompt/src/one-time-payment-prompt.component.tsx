import React                                                 from 'react'
import { FC }                                                from 'react'
import { memo }                                              from 'react'

import { ArrowRightTailIcon }                                from '@ui/icons'
import { Layout }                                            from '@ui/layout'
import { Box }                                               from '@ui/layout'
import { Text }                                              from '@ui/text'
import { useHover }                                          from '@ui/utils'

import { INDENT_BETWEEN_ELEMENTS_FOR_MOBILE }                from './one-time-payment-prompt.constants'
import { ARROW_ICON_HEIGHT_FOR_MOBILE }                      from './one-time-payment-prompt.constants'
import { ARROW_ICON_WIDTH_FOR_MOBILE }                       from './one-time-payment-prompt.constants'
import { ARROW_ICON_HEIGHT_FOR_DESKTOP }                     from './one-time-payment-prompt.constants'
import { ARROW_ICON_WIDTH_FOR_DESKTOP }                      from './one-time-payment-prompt.constants'
import { INDENT_BETWEEN_ELEMENTS_FOR_DESKTOP_DEFAULT_STATE } from './one-time-payment-prompt.constants'
import { INDENT_BETWEEN_ELEMENTS_FOR_DESKTOP_HOVER_STATE }   from './one-time-payment-prompt.constants'
import { INDENT_BETWEEN_ELEMENTS_FOR_LAPTOP }                from './one-time-payment-prompt.constants'
import { TRANSITION_DELAY }                                  from './one-time-payment-prompt.constants'
import { LEFT_INDENT_BY_HOVER }                              from './one-time-payment-prompt.constants'
import { LEFT_INDENT_DEFAULT }                               from './one-time-payment-prompt.constants'
import { RIGHT_INDENT_DEFAULT }                              from './one-time-payment-prompt.constants'
import { RIGHT_INDENT_BY_HOVER }                             from './one-time-payment-prompt.constants'
import { WRAPPER_WIDTH }                                     from './one-time-payment-prompt.constants'
import { OneTimePaymentPromptProps }                         from './one-time-payment-prompt.interfaces'

export const OneTimePaymentPrompt: FC<OneTimePaymentPromptProps> = memo(({
  fullCost,
  desktopModal,
  showDesktopModal,
  mobileModal,
  showMobileModal,
}) => {
  const [hoverElement, hoverElementProps] = useHover()

  const leftIndent = hoverElement ? LEFT_INDENT_BY_HOVER : LEFT_INDENT_DEFAULT
  const rightIndent = hoverElement ? RIGHT_INDENT_BY_HOVER : RIGHT_INDENT_DEFAULT
  const indentBetweenElementsForWideViewport = hoverElement
    ? INDENT_BETWEEN_ELEMENTS_FOR_DESKTOP_HOVER_STATE
    : INDENT_BETWEEN_ELEMENTS_FOR_DESKTOP_DEFAULT_STATE
  const elementColor = hoverElement ? 'mediumPurple' : 'black'

  return (
    <>
      <Box
        {...hoverElementProps}
        onClick={showDesktopModal}
        width={WRAPPER_WIDTH}
        style={{ cursor: 'pointer' }}
        display={['none', 'flex', 'flex']}
        alignItems='center'
        flexShrink={0}
      >
        <Layout
          display={['none', 'none', 'flex']}
          flexBasis={leftIndent}
          style={{ transition: TRANSITION_DELAY }}
          flexShrink={0}
        />
        <Box
          width={ARROW_ICON_WIDTH_FOR_DESKTOP}
          height={ARROW_ICON_HEIGHT_FOR_DESKTOP}
          flexShrink={0}
        >
          <ArrowRightTailIcon width='100%' height='100%' color={elementColor} />
        </Box>
        <Layout
          flexBasis={[0, INDENT_BETWEEN_ELEMENTS_FOR_LAPTOP, indentBetweenElementsForWideViewport]}
          flexShrink={0}
          style={{ transition: TRANSITION_DELAY }}
        />
        <Layout
          display={['none', 'none', 'flex']}
          flexBasis={rightIndent}
          flexShrink={0}
          style={{ transition: TRANSITION_DELAY }}
        />
        <Box flexShrink={0}>
          <Text
            textTransform='uppercase'
            fontFamily={['primary', 'primary', 'secondary']}
            fontWeight={['semiBold', 'semiBold', 'bold']}
            fontSize={['semiMedium', 'semiRegular', 'regular']}
            lineHeight={['default', 'default', 'extra']}
            color={elementColor}
          >
            {fullCost}
          </Text>
        </Box>
      </Box>
      {desktopModal}
      <Box
        {...hoverElementProps}
        onClick={showMobileModal}
        display={['flex', 'none', 'none']}
        style={{ cursor: 'pointer' }}
        alignItems='center'
        flexShrink={0}
      >
        <Box
          width={ARROW_ICON_WIDTH_FOR_MOBILE}
          height={ARROW_ICON_HEIGHT_FOR_MOBILE}
          flexShrink={0}
        >
          <ArrowRightTailIcon width='100%' height='100%' color={elementColor} />
        </Box>
        <Layout
          flexBasis={INDENT_BETWEEN_ELEMENTS_FOR_MOBILE}
          style={{ transition: TRANSITION_DELAY }}
          flexShrink={0}
        />
        <Box flexShrink={0}>
          <Text
            textTransform='uppercase'
            fontFamily='primary'
            fontWeight='semiBold'
            fontSize='semiMedium'
            lineHeight='default'
            color={elementColor}
          >
            {fullCost}
          </Text>
        </Box>
      </Box>
      {mobileModal}
    </>
  )
})
