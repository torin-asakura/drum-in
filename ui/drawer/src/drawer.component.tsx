import React                    from 'react'
import { FC }                   from 'react'
import { motion }               from 'framer-motion'
import { useAnimationControls } from 'framer-motion'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { Backdrop }             from './backdrop'
import { DrawerProps }          from './drawer.interfaces'
import { Renderer }             from './renderer'

const Drawer: FC<DrawerProps> = ({ active, onClose, children }) => {
  const controls = useAnimationControls()
  const [hover, setHover] = useState<boolean>(false)

  const sequence = async () => {
    if (active) {
      await controls.start({ top: 0 })
    }
    return active ? setHover(true) : setHover(false)
  }

  useEffect(() => {
    sequence()
  }, [active])

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
        exit={{ top: '-100%' }}
      >
        {typeof children === 'function' ? children(hover) : children}
      </motion.div>
    </Renderer>
  )
}
export { Drawer }
