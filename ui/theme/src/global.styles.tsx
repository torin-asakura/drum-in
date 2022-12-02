import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'

import React         from 'react'
import { useEffect } from 'react'
import { polyfill }  from 'seamless-scroll-polyfill'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Global
      styles={css`
        @import url('http://db.onlinewebfonts.com/c/54e947fcd1a1db8af459016676e593e8?family=Druk+Wide+Cy+TT+Bold');
        @font-face {
          font-family: 'SF Pro Display';
          src: local('SF Pro Display Medium'), local('SFProDisplay-Medium'),
              url('/fonts/sf-pro-display-500.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {  
          font-family: 'SF Pro Display';
          src: local('SF Pro Display Semibold'), local('SFProDisplay-Semibold'),
              url('/fonts/sf-pro-display-600.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
        }

      html,
      body,
      #__next {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        scroll-behavior: smooth;
      }
      html,
      body {
        overflow-x: hidden;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      
       @keyframes firstAnimationMouse {
          from {
            top: -100%
          }
          to {
            top: 0
          }
        }
        @keyframes firstRevertAnimationMouse {
          from {
            top: 0
          }
          to {
            top: -100%
          }
        }

        @keyframes secondAnimationMouse {
          from {
            top: -100%
          }
          to {
            top: 100%
          }
        }
        @keyframes secondRevertAnimationMouse {
          from {
            top: 100%
          }
          to {
            top: -100%
          }
        }
        
        @keyframes thirdAnimationMouse {
          from {
            top: 0
          }
          to {
            top: 100%
          }
        }
        @keyframes thirdRevertAnimationMouse {
          from {
            top: 100%
          }
          to {
            top: 0
          }
        }
`}
    />
  )
}
