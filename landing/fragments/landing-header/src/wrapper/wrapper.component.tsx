import React                   from 'react'
import { AnimatePresence }     from 'framer-motion'
import { PropsWithChildren }   from 'react'
import { FC }                  from 'react'
import { motion }              from 'framer-motion'
import { memo }                from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Box }                 from '@ui/layout/src'
import { useLocomotiveScroll } from '@forks/react-locomotive-scroll/src'

import { wrapperTransition }   from './wrapper.constants'

export const Wrapper: FC<PropsWithChildren> = memo(({ children }) => {
  const { scroll } = useLocomotiveScroll()
  const [zeroOffsetY, setZeroOffsetY] = useState<boolean>(true)
  const [isNavBackground, setNavBackground] = useState<boolean>(true)

  useEffect(() => {
    if (scroll) {
      scroll?.on('scroll', (args) => {
        if (args.scroll.y !== 0) {
          setZeroOffsetY(false)
        }
        if (args.scroll.y === 0) {
          setZeroOffsetY(true)
        }
      })

      scroll.on('scroll', (instance) => {
        if (instance.scroll.y === 0) {
          setNavBackground(false)
        }
        if (instance.delta.y > instance.scroll.y && isNavBackground) {
          setNavBackground(false)
        }
        if (instance.delta.y < instance.scroll.y && !isNavBackground) {
          setNavBackground(true)
        }
      })
    }
  }, [scroll, isNavBackground, setNavBackground])

  return (
    <Box
      width='100%'
      zIndex={100}
      height={[72, 72, 109]}
      position='fixed'
      justifyContent='center'
      backgroundColor={isNavBackground ? 'background.blackAmber' : 'transparent'}
      style={{ transition: `${wrapperTransition.duration}s` }}
    >
      <AnimatePresence>
        {(zeroOffsetY || isNavBackground) && (
          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: wrapperTransition.duration, ease: wrapperTransition.style },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
})
