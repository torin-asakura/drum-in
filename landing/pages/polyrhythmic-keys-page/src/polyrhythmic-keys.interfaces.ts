import { ConsultationFormDataProps }      from '@globals/data/src'
import { ProcessEducationDataProps }      from '@globals/data/src'
import { TeacherDataProps }               from '@globals/data/src'
import { FooterDataProps }                from '@globals/data/src'
import { ConsultationDataProps }          from '@globals/data/src'
import { FaqDataProps }                   from '@globals/data/src'
import { HeaderDataProps }                from '@globals/data/src'
import { SongUrlType }                    from '@globals/data/src'
import { IndividualCourseBackgroundType } from '@globals/data/src'
import { IndividualCourseDataType }       from '@globals/data/src'

export interface PolyrhythmicKeysProps {
  polyrhythmicKeysData: IndividualCourseDataType
  background: IndividualCourseBackgroundType
  songUrl: SongUrlType
  headerData: HeaderDataProps

  faqData: FaqDataProps
  consultationData: ConsultationDataProps
  footerData: FooterDataProps
  teacherData: TeacherDataProps
  processData: ProcessEducationDataProps
  consultationFormData: ConsultationFormDataProps
}
