import React                     from 'react'
import { FC }                    from 'react'
import { motion }                from 'framer-motion'

import { Button }                from '@ui/button'
import { CrossMenuIcon }         from '@ui/icons'
import { ArrowLeftDownTailIcon } from '@ui/icons'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'

import { Backdrop }              from './backdrop'
import { Container }             from './container'
import { ModalWindowProps }      from './modal-window.interfaces'
import { Renderer }              from './renderer'
import { StudentsList }          from './students-list'
import { useStudents }           from '../data'

const ModalWindow: FC<ModalWindowProps> = ({ active, onClose }) => {
  const students = useStudents()?.students

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
        style={{ position: 'fixed', right: '-100%', top: 0, height: '100%', zIndex: 9999 }}
        animate={{ right: 0 }}
        exit={{ right: '-100%' }}
        transition={{ duration: 0.5 }}
        id='drawer'
      >
        <Container scroll>
          <Box width={[370, 630, 666]}>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={[15, 42, 48]} flexShrink={0} />
              <Box
                width='100%'
                flexDirection={['column', 'row', 'row']}
                justifyContent={['start', 'space-between', 'space-between']}
                alignItems='start'
              >
                <Column order={[2, 0, 0]} width={['100%', 450, 450]}>
                  <Box>
                    <Text
                      fontWeight='medium'
                      fontSize={['large', 'moderate', 'increased']}
                      lineHeight='default'
                      color='text.smokyWhite'
                    >
                      {students?.titleModal}
                    </Text>
                  </Box>
                  <Layout flexBasis={[6, 9, 12]} />
                  <Box>
                    <Text
                      fontWeight='medium'
                      fontSize={['semiMedium', 'semiMedium', 'medium']}
                      lineHeight='medium'
                      color='text.transparentSmokyWhite'
                    >
                      {students?.descriptionModal}
                    </Text>
                  </Box>
                </Column>
                <Box order={[1, 0, 0]} width={['100%', 'auto', 'auto']} justifyContent='end'>
                  <Button
                    size='littlePaddingMediumHeight'
                    variant='transparentWhiteToGrayBackground'
                    onClick={onClose}
                  >
                    <CrossMenuIcon width={24} height={24} />
                  </Button>
                </Box>
              </Box>
              <Layout flexBasis={[16, 29, 29]} flexShrink={0} />
              <Row>
                <Layout flexBasis={0} flexGrow={3} />
                <Box>
                  <ArrowLeftDownTailIcon width={77} height={60} />
                </Box>
                <Layout flexBasis={0} flexGrow={1} />
              </Row>
              <Layout flexBasis={[30, 48, 48]} flexShrink={0} />
              <StudentsList />
              <Layout flexBasis={[20, 39, 58]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          </Box>
        </Container>
      </motion.div>
    </Renderer>
  )
}
export { ModalWindow }
