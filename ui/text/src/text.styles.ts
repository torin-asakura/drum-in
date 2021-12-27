import { prop }       from 'styled-tools'
import { switchProp } from 'styled-tools'

export const leadTextHeader = {
  color: 'white',
  fontWeight: 'bold',
  letterSpacing: '0.15em',
}

export const leadTextContent = {
  color: 'white',
  fontWeight: 'semiNormal',
  letterSpacing: '0.15em',
  textAlign: 'justify',
}

export const buttonContent = {
    letterSpacing:'0.15em',
    fontWeight:'bold'
}

export const navigationContent = {
  color:'black',
  fontSize:'big',
  fontWeight:'normal',
  lineHeight:'regular',
  letterSpacing:'0.15em'
}

export const textStyles = switchProp(prop('variant', 'none'), {
  leadTextHeader: leadTextHeader,
  leadTextContent: leadTextContent,
  buttonContent: buttonContent,
  navigationContent:navigationContent 
})
