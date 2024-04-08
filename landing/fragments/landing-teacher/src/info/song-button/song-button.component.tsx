import React                      from 'react'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'

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

import { TeacherBlockProps }      from '../../teacher.interfaces'

const SongButton: FC<TeacherBlockProps> = ({ playSong, setPlaySong }) => {
  const [hoverIcon, hoverIconProps] = useHover()

  return (
    <>
      <Box
        display={['none', 'none', 'flex']}
        alignSelf='end'
        borderRadius='larger'
        position='relative'
        flexShrink={0}
        width={[300, 300, 380, 275]}
      >
        <Layout flexBasis={[0, 0, 90, 0]} />
        <Box
          position='absolute'
          display={['none', 'none', 'none', 'flex']}
          top={-100}
          right={-127}
          style={{ transform: 'rotate(-30deg)' }}
        >
          <TwistedArrowBottomIcon width={238} height={53} />
        </Box>
        <Box {...hoverIconProps}>
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
            style={{ borderWidth: '3px' }}
          >
            <Row>
              <Text
                textTransform='uppercase'
                fontWeight='semiBold'
                fontSize='large'
                lineHeight='default'
              >
                {playSong ? (
                  <FormattedMessage id='landing_teacher.stop' />
                ) : (
                  <FormattedMessage id='landing_teacher.listening' />
                )}
              </Text>
            </Row>
          </Button>
        </Box>
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
