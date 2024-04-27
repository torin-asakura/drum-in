import { TeacherDataProps }        from '@globals/data'
import { FooterDataProps }         from '@globals/data'
import { ConsultationDataProps }   from '@globals/data'
import { FaqDataProps }            from '@globals/data'
import { HeaderDataProps }         from '@globals/data'
import { SongUrlType }             from '@globals/data'
import { MainPageBackgroundProps } from '@globals/data'
import { MainPageDataProps }       from '@globals/data'

export interface IndexPageProps {
  mainPageData: MainPageDataProps
  background: MainPageBackgroundProps
  songUrl: SongUrlType
  headerData: HeaderDataProps

  faqData: FaqDataProps
  consultationData: ConsultationDataProps
  footerData: FooterDataProps
  teacherData: TeacherDataProps
}
