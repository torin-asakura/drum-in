import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'
import { styleFn }      from 'styled-system'

export const leadTextHeader: styleFn = ({ theme }) => ({
  color: theme.colors.white,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: '0.15em',
})

export const leadTextContent: styleFn = ({ theme }) => ({
  color: theme.colors.white,
  fontWeight: theme.fontWeights.semiNormal,
  letterSpacing: '0.15em',
  textAlign: 'justify',
})

export const buttonContent: styleFn = ({ theme }) => ({
  letterSpacing: '0.15em',
  fontWeight: theme.fontWeights.bold,
})

export const navigationContent: styleFn = ({ theme }) => ({
  color: theme.colors.black,
  fontSize: theme.fontSizes.big,
  fontWeight: theme.fontWeights.normal,
  lineHeight: theme.lineHeights.regular,
  letterSpacing: '0.15em',
})

export const textStyles = switchProp(prop('variant', 'none'), {
  leadTextHeader: leadTextHeader,
  leadTextContent: leadTextContent,
  buttonContent: buttonContent,
  navigationContent: navigationContent,
})
