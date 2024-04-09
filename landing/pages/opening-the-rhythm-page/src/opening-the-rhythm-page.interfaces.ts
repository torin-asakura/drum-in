import { HeaderDataProps }                 from '@globals/data/src'
import { SongUrlType }                     from '@globals/data/src'
import { OpeningTheRhythmBackgroundProps } from '@globals/data/src'
import { OpeningTheRhythmDataProps }       from '@globals/data/src'

export interface OpeningTheRhythmPageProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  background?: OpeningTheRhythmBackgroundProps | null
  songUrl: SongUrlType
  headerData: HeaderDataProps
}
