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
  <Box width={['100%', '100%', 1920]}>
    <Column width='100%'>
      <Box height={['auto', 'auto', 'auto', 543]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} order={[1, 1, 0]} />
        <Layout display={['none', 'none', 'flex']} flexBasis={0} flexGrow={[0, 0, 0, 1]} />
        <SongButton playSong={playSong} setPlaySong={setPlaySong} />
        <Layout display={['none', 'none', 'flex']} flexBasis={60} flexShrink={14} />
        <Box position='relative' order={[2, 2, 0]} width={['100%', '100%', 500, 822]}>
          <Box
            display={['none', 'none', 'flex']}
            position='absolute'
            top={[-50, -50, -20, -83]}
            left={[-30, -30, -180, -100]}
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
        <Layout display={['none', 'none', 'flex']} flexBasis={0} flexGrow={[0, 0, 0, 1]} />
        <EducationList teacherData={teacherData} />
        <Layout flexBasis={0} flexGrow={3} order={[3, 3, 0]} />
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} order={[5, 5, 0]} />
      </Box>
      <Layout flexBasis={[32, 65, 122]} />
    </Column>
  </Box>
)

export { Info }
