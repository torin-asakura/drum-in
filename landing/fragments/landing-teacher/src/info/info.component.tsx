import React                 from 'react'
import { FC }                from 'react'

import { ExperianceIcon }    from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'

import { PlaySongProps }     from '../play-song.interfaces'
import { EducationList }     from './education-list'
import { OneCharacteristic } from './one-characteristic'
import { SongButton }        from './song-button'
import { useTeacher }        from '../data'
import { getIndent }         from '../helpers'

const Info: FC<PlaySongProps> = ({ playSong, setPlaySong }) => {
  const teacher = useTeacher()?.teacher

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
              {teacher?.experience?.map(({ number, characteristic }, index) => (
                <OneCharacteristic
                  indentLeft={getIndent(index)}
                  numeric={number}
                  title={characteristic}
                />
              ))}
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
