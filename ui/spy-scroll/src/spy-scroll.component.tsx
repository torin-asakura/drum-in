import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Button }         from '@ui/button'
import { SoundOffIcon }   from '@ui/icons'
import { SoundOnIcon }    from '@ui/icons'
import { Box }            from '@ui/layout'

import { SpyScrollProps } from './spy-scroll.interfaces'
import { useSpyScroll }   from './context'
import { useSteps }       from './data'

const SpyScroll: FC<SpyScrollProps> = ({ playSong, setPlaySong }) => {
  const spyScrollStore = useSpyScroll()
  const [active, setActive] = useState<number>(0)
  const steps = useSteps()
  spyScrollStore.setFunction(setActive)

  return (
    <Box
      display={['none', 'none', 'flex']}
      opacity={steps[active]?.title !== 'teacher' ? '1' : '0'}
      zIndex={steps[active]?.title !== 'teacher' ? 100 : -1}
      position='fixed'
      top={32}
      right={265}
      style={{ transition: '0.3s' }}
    >
      <Button
        size='littlePaddingSemiRegularHeight'
        variant='transparentWhiteBackgroundWhiteBorder'
        onClick={() => (playSong ? setPlaySong(false) : setPlaySong(true))}
      >
        {playSong ? (
          <SoundOnIcon width={32} height={32} />
        ) : (
          <SoundOffIcon width={32} height={32} />
        )}
      </Button>
    </Box>
  )
}
export { SpyScroll }
