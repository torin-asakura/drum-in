import React                                                                                                                                   from 'react'
import { AnimatePresence }                                                                                                                     from 'framer-motion'
import { PropsWithChildren }                                                                                                                   from 'react'
import { FC }                                                                                                                                  from 'react'
import { motion }                                                                                                                              from 'framer-motion'
import { memo }                                                                                                                                from 'react'

import { Box }                from '@ui/layout/src'
import { WRAPPER_TRANSITION } from './wrapper.constants'

import { HIDE_CONTENT }                                                                                                                        from './wrapper.constants'
import { SHOW_CONTENT }                                                                                                          from './wrapper.constants'
import { WRAPPER_HEIGHT_FOR_SMALL_VIEWPORT }                                                                       from './wrapper.constants'
import { WRAPPER_HEIGHT_FOR_WIDE_VIEWPORT }                                     from './wrapper.constants'
import { WRAPPER_Z_INDEX }                    from './wrapper.constants'
import { useScroll }                                                                                                                           from './hooks'

export const Wrapper: FC<PropsWithChildren> = memo(({ children }) => {
  const { zeroOffsetY, isNavBackground } = useScroll()

  return (
    <Box
      width='100%'
      zIndex={WRAPPER_Z_INDEX}
      height={[
        WRAPPER_HEIGHT_FOR_SMALL_VIEWPORT,
        WRAPPER_HEIGHT_FOR_SMALL_VIEWPORT,
        WRAPPER_HEIGHT_FOR_WIDE_VIEWPORT,
      ]}
      position='fixed'
      justifyContent='center'
      backgroundColor={isNavBackground ? 'background.blackAmber' : 'transparent'}
      style={{ transition: `${WRAPPER_TRANSITION.duration}s` }}
    >
      <AnimatePresence>
        {(zeroOffsetY || isNavBackground) && (
          <motion.div
            style={{ width: '100%' }}
            initial={{ opacity: SHOW_CONTENT }}
            animate={{ opacity: HIDE_CONTENT }}
            exit={{
              opacity: HIDE_CONTENT,
              transition: { duration: WRAPPER_TRANSITION.duration, ease: WRAPPER_TRANSITION.style },
            }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
})
