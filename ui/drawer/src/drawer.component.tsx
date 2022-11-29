import React           from 'react'
import { FC }          from 'react'
import { motion }      from 'framer-motion'

import { Backdrop }    from './backdrop'
import { DrawerProps } from './drawer.interfaces'
import { Renderer }    from './renderer'

const Drawer: FC<DrawerProps> = ({ active, onClose }, children) => (
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
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.5 }}
      id='drawer'
    >
      {children}
    </motion.div>
  </Renderer>
)
export { Drawer }
