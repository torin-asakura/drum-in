import { SongUrlType }             from '@globals/data'
import { MainPageBackgroundProps } from '@globals/data'
import { MainPageDataProps }       from '@globals/data'

export interface IndexPageProps {
  mainPageData: MainPageDataProps
  background: MainPageBackgroundProps
  songUrl: SongUrlType
}
