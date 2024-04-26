/* eslint-disable consistent-return */

import { useEffect }           from 'react'
import { useState }            from 'react'

import { useLocomotiveScroll } from '@forks/react-locomotive-scroll'

import { UseScrollType }       from './use-scroll.interfaces'

export const useScroll: UseScrollType = () => {
  const { scroll } = useLocomotiveScroll()

  const [zeroOffsetY, setZeroOffsetY] = useState(true)
  const [isNavBackground, setNavBackground] = useState(true)

  useEffect(() => {
    if (scroll) {
      const handleScroll = (args) => {
        if (args.scroll.y !== 0) {
          setZeroOffsetY(false)
        }
        if (args.scroll.y === 0) {
          setZeroOffsetY(true)
        }

        if (args.scroll.y === 0) {
          setNavBackground(false)
        }
        if (args.delta.y > args.scroll.y && isNavBackground) {
          setNavBackground(false)
        }
        if (args.delta.y < args.scroll.y && !isNavBackground) {
          setNavBackground(true)
        }
      }

      scroll.on('scroll', handleScroll)

      return () => {
        scroll.off('scroll', handleScroll)
      }
    }
  }, [scroll, isNavBackground, setNavBackground])

  return { zeroOffsetY, isNavBackground }
}
