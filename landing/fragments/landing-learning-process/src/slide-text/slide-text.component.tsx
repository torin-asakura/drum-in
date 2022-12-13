import React                 from 'react'
import { FC }                from 'react'

import { ArrowLeftDownIcon } from '@ui/icons'
import { ArrowRightUpIcon }  from '@ui/icons'
import { BullseyeIcon }      from '@ui/icons'
import { MusicalNoteIcon }   from '@ui/icons'
import { RockSignIcon }      from '@ui/icons'
import { TrebleClefIcon }    from '@ui/icons'
import { Box }               from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Row }  from '@ui/layout'
import { Text }              from '@ui/text'
import { useHover }          from '@ui/utils'

import { SlideTextProps }    from './slide-text.interfaces'

const SlideText: FC<SlideTextProps> = ({ text, activeIcons }) => {
  const [active, activeProps] = useHover()

  return (
    <Box
      {...activeProps}
      position='relative'
      justifyContent='center'
      alignItems='center'
      width={[246, 350, 480]}
      height={[164, 240, 320]}
      overflow='hidden'
      borderRadius={['medium', 'extra', 'bigger']}
      border={['normalSmokyWhite', 'mediumBoldSmokyWhite', 'mediumBoldBlackAmber']}
      backgroundColor={[
        'background.blackAmber',
        'background.blackAmber',
        active ? 'background.purple' : 'background.smokyWhite',
      ]}
      style={{ transition: '0.3s' }}
    >
      <Row>
        <Layout flexBasis={5} flexShrink={0} />
        <Box>
          <Text
            textAlign='center'
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['micro', 'medium', 'regular']}
            lineHeight={['medium', 'medium', 'extra']}
            color={['text.smokyWhite', 'text.smokyWhite', 'text.blackAmber']}
          >
            {text}
          </Text>
        </Box>
        <Layout flexBasis={5} flexShrink={0} />
      </Row>
      {activeIcons === 'target' ? (
        <Box display={['none', 'none', 'flex']}>
          <Box
            position='absolute'
            top={active ? 24 : -10}
            left={active ? 34 : -15}
            style={{ transition: '0.3s' }}
          >
            <TrebleClefIcon width={43} height={79} />
          </Box>
          <Box
            position='absolute'
            bottom={active ? 27 : -5}
            right={active ? 32 : -5}
            style={{ transition: '0.3s' }}
          >
            <BullseyeIcon width={70} height={75} />
          </Box>
          <Box
            position='absolute'
            top={active ? 9 : -10}
            right={active ? -14 : -25}
            style={{ transition: '0.3s' }}
          >
            <ArrowLeftDownIcon width={127} height={57} />
          </Box>
        </Box>
      ) : (
        <Box display={['none', 'none', 'flex']}>
          <Box
            position='absolute'
            top={active ? 0 : -10}
            left={active ? 40 : 40}
            style={{ transition: '0.3s' }}
          >
            <MusicalNoteIcon width={60} height={60} />
          </Box>
          <Box
            position='absolute'
            bottom={active ? -21 : -31}
            left={active ? -29 : -40}
            style={{ transition: '0.3s' }}
          >
            <ArrowRightUpIcon width={162} height={76} />
          </Box>
          <Box
            position='absolute'
            bottom={active ? 16 : -5}
            right={active ? 2 : -10}
            style={{ transition: '0.3s' }}
          >
            <RockSignIcon width={70} height={70} />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export { SlideText }
