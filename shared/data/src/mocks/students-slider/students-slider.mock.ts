import { StudentsSlider } from './students-slider.interface'

const studentsSliderMock: StudentsSlider[] = [
  {
    fullName: 'Елизавета Мусаелян',
    age: '32 года',
    profession: 'Саксофонистка',
    description:
      'Один из перых учеников. Вокалистка, саксофонистка, композитор, бэнд лидер группы Cotton Air, одна из управляющих IndieRockSchool.',
    itemId: 'saxophonist',
  },
  {
    fullName: 'Алексей Лазарев',
    age: '40 лет',
    profession: 'Барабанщик',
    description:
      'Уже барабанщик групп Персефона и Птица, пришел в школу 10 лет назад с нуля, обучался игре на барабанах в течении 3-х лет.',
    itemId: 'drummer',
  },
  {
    fullName: 'Майа Горят',
    age: '31 год',
    profession: 'Скрипачка',
    description:
      'Пришла в школу 5 лет назад. Собрала много полезных ритмических приёмов, которые использует сейчас при написании песен и работе в театре.',
    itemId: 'violinist',
  },
  {
    fullName: 'Анфиса Шелехина',
    age: '28 лет',
    profession: 'Вокалистка',
    description:
      'Пришла в школу для повышения квалификации. Завершила 2 уровня и спустя 10 месяцев начала применять знания в собственных аранжировках.',
    itemId: 'vocalist',
  },
]

export { studentsSliderMock }
