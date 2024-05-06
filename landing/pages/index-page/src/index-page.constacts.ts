export const LOCOMOTIVE_SCROLL_OPTIONS = {
  smooth: true,
  smartphone: {
    smooth: true,
    smartphone: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  },
}

export const LOCOMOTIVE_SCROLL_WATCH = []

export enum ModuleID {
  HERO = 'hero',
  TEACHER = 'teacher',
  PRIVATE_LESSON = 'private-lesson',
  LEARNING_PROCESS = 'learning-process',
  STUDENTS = 'students',
  FAQ = 'faq',
  CTA = 'cta',
  FOOTER = 'footer',

}

export const MODULES_ORDER = [
  ModuleID.HERO,
  ModuleID.TEACHER,
  ModuleID.PRIVATE_LESSON,
  ModuleID.LEARNING_PROCESS,
  ModuleID.STUDENTS,
  ModuleID.FAQ,
  ModuleID.CTA,
  ModuleID.FOOTER
]
