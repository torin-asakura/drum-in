import { HeaderDataProps }                from '@globals/data/src'
import { SongUrlType }                    from '@globals/data/src'
import { IndividualCourseBackgroundType } from '@globals/data/src'
import { IndividualCourseDataType }       from '@globals/data/src'

export interface ConnacolPageProps {
  connacolData: IndividualCourseDataType
  background: IndividualCourseBackgroundType
  songUrl: SongUrlType
  headerData: HeaderDataProps
}
