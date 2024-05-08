import { PaymentSettingsDataProps }       from '@globals/data'
import { SeoDataProps }                   from '@globals/data'
import { ConsultationFormDataProps }      from '@globals/data'
import { ProcessEducationDataProps }      from '@globals/data'
import { TeacherDataProps }               from '@globals/data'
import { FooterDataProps }                from '@globals/data'
import { ConsultationDataProps }          from '@globals/data'
import { FaqDataProps }                   from '@globals/data'
import { HeaderDataProps }                from '@globals/data'
import { SongUrlType }                    from '@globals/data'
import { IndividualCourseBackgroundType } from '@globals/data'
import { IndividualCourseDataType }       from '@globals/data'

export interface FifthDimensionProps {
  fifthDimensionData: IndividualCourseDataType
  background: IndividualCourseBackgroundType
  songUrl: SongUrlType
  headerData: HeaderDataProps
  paymentSettingsData: PaymentSettingsDataProps

  SEO: SeoDataProps
  faqData: FaqDataProps
  consultationData: ConsultationDataProps
  footerData: FooterDataProps
  teacherData: TeacherDataProps
  processData: ProcessEducationDataProps
  consultationFormData: ConsultationFormDataProps
}
