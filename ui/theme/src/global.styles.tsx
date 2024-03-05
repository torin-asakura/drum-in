import { Global }                 from '@emotion/react'
import { css }                    from '@emotion/react'

import React                      from 'react'
import { useEffect }              from 'react'
import { polyfill }               from 'seamless-scroll-polyfill'

import { DrukTextWide }           from './fonts'
import { locomotiveScrollStyles } from './locomotive-scroll'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
        @import url('https://fonts.cdnfonts.com/css/sf-pro-display');

        @font-face {
          font-family: 'Druk Wide Cy TT Bold';
          src: local('Druk Wide Cy TT Bold'), url(${DrukTextWide}) format('woff');
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

        .swiper-pagination {
          position: absolute;
          bottom: 0;
          left: 0;
          text-align: left;
          transition: .3s opacity;
          transform: translate3d(0, 0, 0);
          z-index: 10;
        }

        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
          background: #807F7F;
          border-radius: 2px;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform: scale(0);
          transform-origin: left top;
        }

        .swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal {
          width: 335px;
          height: 2px;
          background: rgba(242, 242, 242, 0.15);
          bottom: 0;
          left: 0;
        }

        .students-slider-desktop {
          overflow: visible !important;
        }

        .advantages-slider .swiper-slide,
        .course-process-slider .swiper-slide,
        .program-slider .swiper-slide,
        .choose-courses-slider .swiper-slide,
        .students-slider .swiper-slide,
        .students-slider-desktop .swiper-slide,
        .learning-process-slider .swiper-slide,
        .teacher-slider .swiper-slide {
          width: auto !important;
        }
        
        ${locomotiveScrollStyles}
      `}
    />
  )
}
