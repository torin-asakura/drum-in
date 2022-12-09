import React                      from 'react'
import { FormattedMessage }       from 'react-intl'
import { useRef }                 from 'react'
import { useEffect }              from 'react'
import { useState }               from 'react'

import { Button }                 from '@ui/button'
import { PlayIcon }               from '@ui/icons'
import { PauseIcon }              from '@ui/icons'
import { TwistedArrowBottomIcon } from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'
import { useHover }               from '@ui/utils'

const SongButton = () => {
  const [hoverIcon, hoverIconProps] = useHover()
  const [playSong, setPlaySong] = useState<boolean>(false)

  const songElement = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/music/song-1.mp3') : undefined
  )
  useEffect(() => {
    if (playSong) {
      songElement.current?.play()
    } else {
      songElement.current?.pause()
    }
  }, [playSong])

  return (
    <>
      <Box
        display={['none', 'none', 'flex']}
        {...hoverIconProps}
        border={hoverIcon ? 'mediumBoldSmokyWhite' : 'mediumTransparent'}
        alignSelf='end'
        borderRadius='larger'
        position='relative'
        flexShrink={0}
        width={275}
      >
        <Box position='absolute' top={-100} right={-127} style={{ transform: 'rotate(-30deg)' }}>
          <TwistedArrowBottomIcon width={238} height={53} />
        </Box>
        <Button
          size='mediumPaddingBigHeight'
          variant='whiteBackground'
          fill
          iconSvg={
            playSong ? (
              <PauseIcon width={36} height={36} color={hoverIcon ? 'rgb(242,242,242)' : ''} />
            ) : (
              <PlayIcon width={36} height={36} color={hoverIcon ? 'rgb(242,242,242)' : ''} />
            )
          }
          horizontalLocation='right'
          onClick={() => (playSong ? setPlaySong(false) : setPlaySong(true))}
        >
          <Row>
            <Text
              textTransform='uppercase'
              fontWeight='semiBold'
              fontSize='large'
              lineHeight='default'
            >
              {playSong ? (
                <FormattedMessage id='landing_teacher.stop' defaultMessage='Остановить' />
              ) : (
                <FormattedMessage id='landing_teacher.listening' defaultMessage='Прослушать' />
              )}
            </Text>
          </Row>
        </Button>
      </Box>
      <Box
        {...hoverIconProps}
        order={[4, 4, 0]}
        height='auto'
        alignSelf='end'
        display={['flex', 'flex', 'none']}
        position='relative'
      >
        <Box
          position='absolute'
          top={[12, 17, 0]}
          left={[-128, -220, 0]}
          width={[100, 160, 0]}
          height={[24, 35, 0]}
          style={{ transform: 'rotate(-180deg) scaleY(-1)' }}
        >
          <TwistedArrowBottomIcon width='100%' height='100%' />
        </Box>
        <Column>
          <Button
            size='middlingPaddingNormalHeight'
            variant='whiteBackground'
            onClick={() => (playSong ? setPlaySong(false) : setPlaySong(true))}
          >
            {playSong ? (
              <PauseIcon width={20} height={20} color={hoverIcon ? 'rgb(242,242,242)' : ''} />
            ) : (
              <PlayIcon width={20} height={20} color={hoverIcon ? 'rgb(242,242,242)' : ''} />
            )}
          </Button>
          <Layout flexBasis={[20, 64, 0]} />
        </Column>
      </Box>
    </>
  )
}

export { SongButton }
