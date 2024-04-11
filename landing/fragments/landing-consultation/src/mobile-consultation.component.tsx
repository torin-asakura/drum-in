import React                         from 'react'
import { FC }                        from 'react'
import { motion }                    from 'framer-motion'

import { ContainerMobile }           from '@ui/modal'
import { Renderer }                  from '@ui/modal'
import { Backdrop }                  from '@ui/modal'

import { MobileConsultationContent } from './consultation-content'
import { ConsultationProps }         from './consultation.interfaces'

const MobileConsultation: FC<ConsultationProps> = ({
  activeRender,
  setVisibleModal,
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
      <Backdrop onClick={() => setVisibleModal(false)} />
    </motion.div>
    <motion.div
      style={{ position: 'fixed', bottom: '-100%', left: 0, width: '100%', zIndex: 950 }}
      animate={{ bottom: 0 }}
      exit={{ bottom: '-100%' }}
      transition={{ duration: 0.5 }}
      id='modal-form-mobile'
    >
      <ContainerMobile scroll={scroll}>
        <MobileConsultationContent setVisibleModal={setVisibleModal} />
      </ContainerMobile>
    </motion.div>
  </Renderer>
)

export { MobileConsultation }
