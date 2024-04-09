import { HeaderDataProps }                from '@globals/data'
import { SongUrlType }                    from '@globals/data'
import { IndividualCourseBackgroundType } from '@globals/data'
import { IndividualCourseDataType }       from '@globals/data'

export interface SeventhHeavenProps {
  seventhHeavenData: IndividualCourseDataType
  background: IndividualCourseBackgroundType
  songUrl: SongUrlType
  headerData: HeaderDataProps
}
