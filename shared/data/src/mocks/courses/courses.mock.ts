import { Courses } from './courses.interface'

const coursesMock: Courses[] = [
  {
    title: 'Открытие ритма',
    level: '',
    desc: 'Это основной курс нашей школы, который включает в себя 3 самостоятельных',
    price: '8 400 ₽/мес',
    quantityVideoLessons: 39,
    circleFirstLine: '3',
    circleSecondLine: 'прямых эфиров',
    quantityMonths: 15,
    textMonths: 'месяцев',
    itemId: 'courseOpeningTheRhythm',
  },
  {
    title: 'Ощущение времени',
    level: 'Уровень 1',
    desc: 'Базовый курс, который даст вам первый толчок к профессиональному росту',
    price: '8 400 ₽/мес',
    quantityVideoLessons: 13,
    circleFirstLine: '20',
    circleSecondLine: 'прямых эфиров',
    quantityMonths: 5,
    textMonths: 'месяцев',
    itemId: 'courseSenseOfTime',
  },
  {
    title: 'Пятое измерение',
    level: 'Уровень 2',
    desc: 'Курс для любителей, которые хотят усовершенствовать своё мастерство',
    price: '8 400 ₽/мес',
    quantityVideoLessons: 13,
    circleFirstLine: '20',
    circleSecondLine: 'прямых эфиров',
    quantityMonths: 5,
    textMonths: 'месяцев',
    itemId: 'courseFifthDimension',
  },
  {
    title: 'Седьмое небо',
    level: 'Уровень 3',
    desc: 'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
    price: '8 400 ₽/мес',
    quantityVideoLessons: 13,
    circleFirstLine: '20',
    circleSecondLine: 'прямых эфиров',
    quantityMonths: 5,
    textMonths: 'месяцев',
    itemId: 'courseSeventhHeaven',
  },
  {
    title: 'Коннакол',
    level: '',
    desc: 'Курс по индийской системе ритма и одной из древнейших музыкальных традиций',
    price: '8 400 ₽/мес',
    quantityVideoLessons: 6,
    circleFirstLine: '',
    circleSecondLine: 'бонус-модуль',
    quantityMonths: 4,
    textMonths: 'месяца',
    itemId: 'courseConnacol',
  },
  {
    title: 'Ключи полиритмии',
    level: '',
    desc: 'Короткий курс для тех, кому интересно углубиться в полиритмию.',
    price: '8 400 ₽/мес',
    circleFirstLine: '',
    circleSecondLine: '',
    quantityVideoLessons: 5,
    quantityMonths: 1,
    textMonths: 'месяц',
    itemId: 'coursePolyrhythmicKeys',
  },
]

export { coursesMock }
