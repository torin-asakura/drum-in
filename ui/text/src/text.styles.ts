import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const leadTextHeader = ({theme})  => ({
  color: theme.colors.white,
  fontWeight: theme.fontWeights.bold,
  letterSpacing: '0.15em',
})

export const leadTextContent = ({theme}) => ( {
  color: theme.colors.white,
  fontWeight: theme.fontWeights.semiNormal,
  letterSpacing: '0.15em',
  textAlign: 'justify',
})

export const buttonContent = ({theme})=>({
    letterSpacing:'0.15em',
    fontWeight:theme.fontWeights.bold
})

export const navigationContent = ({theme}) => ({
  color:theme.colors.black,
  fontSize: theme.fontSizes.big,
  fontWeight:theme.fontWeights.normal,
  lineHeight: theme.lineHeights.regular,
  letterSpacing:'0.15em'
})

export const textStyles = switchProp(prop('variant', 'none'), {
  leadTextHeader: leadTextHeader,
  leadTextContent: leadTextContent,
  buttonContent: buttonContent,
  navigationContent:navigationContent 
})
