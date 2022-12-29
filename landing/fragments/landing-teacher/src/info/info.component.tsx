import React                 from 'react'
import { FC }                from 'react'
import { useIntl }           from 'react-intl'

import { ExperianceIcon }    from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'

import { PlaySongProps }     from '../play-song.interfaces'
import { EducationList }     from './education-list'
import { OneCharacteristic } from './one-characteristic'
import { SongButton }        from './song-button'

const Info: FC<PlaySongProps> = ({ playSong, setPlaySong }) => {
  const { formatMessage } = useIntl()

  return (
    <Box width={['100%', '100%', 1920]}>
      <Column width='100%'>
        <Box height={['auto', 'auto', 543]}>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} order={[1, 1, 0]} />
          <Layout display={['none', 'none', 'flex']} flexBasis={0} flexGrow={1} />
          <SongButton playSong={playSong} setPlaySong={setPlaySong} />
          <Layout display={['none', 'none', 'flex']} flexBasis={60} flexShrink={14} />
          <Box position='relative' order={[2, 2, 0]} width={['100%', '100%', 822]}>
            <Box
              display={['none', 'none', 'flex']}
              position='absolute'
              top={-83}
              left={-100}
              style={{ transform: 'rotate(-15deg)' }}
            >
              <ExperianceIcon width={160} height={160} />
            </Box>
            <Column>
              <OneCharacteristic
                indentLeft={68}
                numeric={formatMessage({
                  id: 'landing_teacher.sixteen',
                  defaultMessage: '16',
                })}
                title={formatMessage({
                  id: 'landing_teacher.years_of_performances',
                  defaultMessage: 'лет выступлений',
                })}
              />
              <OneCharacteristic
                indentLeft={106}
                numeric={formatMessage({
                  id: 'landing_teacher.twelve',
                  defaultMessage: '12',
                })}
                title={formatMessage({
                  id: 'landing_teacher.years_of_teaching',
                  defaultMessage: 'лет преподавания',
                })}
              />
              <OneCharacteristic
                indentLeft={0}
                numeric={formatMessage({
                  id: 'landing_teacher.twenty_four',
                  defaultMessage: '24',
                })}
                title={formatMessage({
                  id: 'landing_teacher.festival',
                  defaultMessage: 'фестиваля',
                })}
              />
              <OneCharacteristic
                indentLeft={68}
                numeric={formatMessage({
                  id: 'landing_teacher.four',
                  defaultMessage: '4',
                })}
                title={formatMessage({
                  id: 'landing_teacher.album',
                  defaultMessage: 'альбома',
                })}
              />
              <OneCharacteristic
                indentLeft={160}
                numeric={formatMessage({
                  id: 'landing_teacher.four_hundred_and_sixty_eight',
                  defaultMessage: '468',
                })}
                title={formatMessage({
                  id: 'landing_teacher.students',
                  defaultMessage: 'учеников',
                })}
              />
            </Column>
          </Box>
          <Layout display={['none', 'none', 'flex']} flexBasis={0} flexGrow={1} />
          <EducationList />
          <Layout flexBasis={0} flexGrow={3} order={[3, 3, 0]} />
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} order={[5, 5, 0]} />
        </Box>
        <Layout flexBasis={[32, 65, 122]} />
      </Column>
    </Box>
  )
}
export { Info }
