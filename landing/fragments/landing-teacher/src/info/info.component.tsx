import React                 from 'react'
import { FC }                from 'react'

import { ExperianceIcon }    from '@ui/icons'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'

import { TeacherBlockProps } from '../teacher.interfaces'
import { EducationList }     from './education-list'
import { OneCharacteristic } from './one-characteristic'
import { SongButton }        from './song-button'
import { getIndent }         from '../helpers'

const Info: FC<TeacherBlockProps> = ({ teacherData, playSong, setPlaySong }) => (
  <Box width={['100%', '100%', '100%', 1920]}>
    <Column width='100%' alignItems='center'>
      <Box fill justifyContent={['start', 'start', 'center', 'center']}>
        <Layout flexBasis={[20, 30, 160, 160]} />

        <SongButton playSong={playSong} setPlaySong={setPlaySong} />
        <Layout flexBasis={[0, 0, 0, 100]} />
        <Box position='relative'>
          <Box
            display={['none', 'none', 'flex']}
            position='absolute'
            top={-60}
            left={-150}
            style={{ transform: 'rotate(-15deg)' }}
          >
            <ExperianceIcon width={160} height={160} />
          </Box>

          <Column>
            {teacherData?.statistics?.map((item, index) => (
              <OneCharacteristic
                indentLeft={getIndent(index)}
                numeric={item?.number}
                title={item?.text}
                key={item?.number}
              />
            ))}
          </Column>
        </Box>
        <Layout flexBasis={[0, 0, 160]} />
        <EducationList teacherData={teacherData} />

        <Layout flexBasis={[20, 30, 160, 160]} />
      </Box>
      <Layout flexBasis={[32, 65, 122]} />
    </Column>
  </Box>
)

export { Info }
