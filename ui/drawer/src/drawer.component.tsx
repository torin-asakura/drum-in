import React           from 'react'
import { useEffect }           from 'react'
import { FC }          from 'react'
import { motion, useAnimationControls }      from 'framer-motion'

import { Backdrop }    from './backdrop'
import { DrawerProps } from './drawer.interfaces'
import { Renderer }    from './renderer'

const Drawer: FC<DrawerProps> = ({ children, active, onClose }) => {
  const controls = useAnimationControls()

  let stateAnimation = false

  const sequence = async () => {
    await controls.start({ top: 0 })
    return stateAnimation = true
  }

  useEffect(() => {
    sequence()
  }, [active])

  // console.log(stateAnimation)

  return (
    <Renderer active={active}>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{ position: 'fixed', left: 0, top: '-100%', width: '100%', zIndex: 9999 }}
        animate={controls}
      >
        {children}
      </motion.div>
    </Renderer>
  )
}
export { Drawer }
