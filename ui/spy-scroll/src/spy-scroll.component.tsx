import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Button }         from '@ui/button'
import { SoundOffIcon }   from '@ui/icons'
import { SoundOnIcon }    from '@ui/icons'
import { Box }            from '@ui/layout'
import { useHover }       from '@ui/utils'

import { SpyScrollProps } from './spy-scroll.interfaces'
import { useSpyScroll }   from './context'
import { useSteps }       from './data'

const SpyScroll: FC<SpyScrollProps> = ({ playSong, setPlaySong }) => {
  const spyScrollStore = useSpyScroll()
  const [active, setActive] = useState<number>(0)
  const steps = useSteps()
  const [hover, hoverProps] = useHover()
  spyScrollStore.setFunction(setActive)

  return (
    <Box
      display={['none', 'none', 'flex']}
      opacity={steps[active]?.title !== 'teacher' ? '1' : '0'}
      zIndex={steps[active]?.title !== 'teacher' ? 100 : -1}
      borderRadius='max'
      position='fixed'
      top={32}
      right={265}
      style={{ transition: '0.2s' }}
      {...hoverProps}
    >
      <Button
        size='littlePaddingSemiRegularHeight'
        variant='transparentWhiteBackgroundWhiteBorder'
        onClick={() => (playSong ? setPlaySong(false) : setPlaySong(true))}
      >
        {playSong ? (
          <SoundOnIcon
            width={32}
            height={32}
            color={hover ? 'rgba(156, 101, 242, 1)' : 'rgb(242, 242, 242)'}
          />
        ) : (
          <SoundOffIcon
            width={32}
            height={32}
            color={hover ? 'rgba(156, 101, 242, 1)' : 'rgb(242, 242, 242)'}
          />
        )}
      </Button>
    </Box>
  )
}
export { SpyScroll }
