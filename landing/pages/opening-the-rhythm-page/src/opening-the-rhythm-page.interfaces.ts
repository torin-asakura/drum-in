import { SeoDataProps }                    from '@globals/data/src'
import { ConsultationFormDataProps }       from '@globals/data/src'
import { ProcessEducationDataProps }       from '@globals/data/src'
import { TeacherDataProps }                from '@globals/data/src'
import { FooterDataProps }                 from '@globals/data/src'
import { ConsultationDataProps }           from '@globals/data/src'
import { FaqDataProps }                    from '@globals/data/src'
import { HeaderDataProps }                 from '@globals/data/src'
import { SongUrlType }                     from '@globals/data/src'
import { OpeningTheRhythmBackgroundProps } from '@globals/data/src'
import { OpeningTheRhythmDataProps }       from '@globals/data/src'

export interface OpeningTheRhythmPageProps {
  openingTheRhythm?: OpeningTheRhythmDataProps | null
  background?: OpeningTheRhythmBackgroundProps | null
  songUrl: SongUrlType
  headerData: HeaderDataProps

  SEO: SeoDataProps
  faqData: FaqDataProps
  consultationData: ConsultationDataProps
  footerData: FooterDataProps
  teacherData: TeacherDataProps
  processData: ProcessEducationDataProps
  consultationFormData: ConsultationFormDataProps
}
