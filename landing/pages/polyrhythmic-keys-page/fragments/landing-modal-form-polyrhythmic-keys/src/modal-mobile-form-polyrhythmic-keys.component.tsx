import React                               from 'react'
import { FC }                              from 'react'
import { motion }                          from 'framer-motion'

import { ContainerMobile }                 from '@ui/modal'
import { Renderer }                        from '@ui/modal'
import { Backdrop }                        from '@ui/modal'

import { ContentMobile }                   from './content'
import { ModalFormPolyrhythmicKeyslProps } from './modal-form-polyrhythmic-keys.interfaces'

const ModalMobileFormPolyrhythmicKeys: FC<ModalFormPolyrhythmicKeyslProps> = ({
  polyrhythmicKeysData,
  activeRender,
  onClose,
  scroll = true,
}) => (
  <Renderer active={activeRender}>
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
      style={{ position: 'fixed', bottom: '-100%', left: 0, width: '100%', zIndex: 950 }}
      animate={{ bottom: 0 }}
      exit={{ bottom: '-100%' }}
      transition={{ duration: 0.5 }}
      id='modal-form-mobile'
    >
      <ContainerMobile scroll={scroll}>
        <ContentMobile onClose={onClose} polyrhythmicKeysData={polyrhythmicKeysData} />
      </ContainerMobile>
    </motion.div>
  </Renderer>
)

export { ModalMobileFormPolyrhythmicKeys }
