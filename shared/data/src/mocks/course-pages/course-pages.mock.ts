import { CoursePages } from './course-pages.interface'

const coursePagesMock: CoursePages[] = [
  {
    titleBanner: 'Открытие ритма',
    descBanner: 'Курс, который поможет понимать, исполнять и писать музыку',
    pathPage: '/opening-the-rhythm',
    tapePhrase: '#ОСНОВНОЙ КУРС',
  },
  {
    titleBanner: 'Ощущение времени',
    descBanner: 'Базовый курс, который даст вам базу, необходимую любому музыканту',
    pathPage: '/feeling-of-time',
    tapePhrase: '#Уровень 1',
  },
  {
    titleBanner: 'Пятое измерение',
    descBanner: 'Курс для любителей, которые хотят усовершенствовать своё мастерство',
    pathPage: '/fifth-dimension',
    tapePhrase: '#Уровень 2',
  },
]

export { coursePagesMock }
