type BreakpointsProp = Array<string> & {
  tablet?: string | number
  laptop?: string | number
  wide?: string | number
}

export const breakpoints: BreakpointsProp = ['40em', '52em', '95em']

breakpoints.tablet = breakpoints[0] // eslint-disable-line
breakpoints.laptop = breakpoints[1] // eslint-disable-line
breakpoints.wide = breakpoints[2] // eslint-disable-line
