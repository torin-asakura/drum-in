import React from 'react'

export interface SliderProps {
  clName: string
  spaceBetween: number
  slidesPerView: number | 'auto'
  grabCursor?: boolean
  loop?: boolean
  autoHeight?: boolean
  progressbar?: boolean
  centeredSlides?: boolean
  speed?: number
  allowTouchMove?: boolean
  mousewheel?: boolean
  mousewheelInvert?: boolean
  slidesOffsetAfter?: number
  slidesOffsetBefore?: number
  forceToAxis?: boolean
  children: React.ReactNode
}
