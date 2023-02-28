import { ModalForm } from './modal-form.interface'

const modalFormMock: ModalForm[] = [
  {
    title: '“Открытие ритма”',
    courseContent: {
      titles: ['“Ощущение времени”', '“Пятое измерение”', '“Седьмое небо”'],
      descriptions: [
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
      ],
      prices: ['40 000 ₽', '40 000 ₽', '40 000 ₽'],
    },
    finalPriceForOneTimePayment: '80 000 ₽',
    monthlyPayment: '8 700 ₽/мес.',
    installmentDuration: '15 месяцев',
    finalPriceForInstallment: '117 400 ₽',
    benefit: '10%',
    pathPage: '/opening-the-rhythm',
  },
  {
    title: '“Ощущение времени”',
    courseContent: {
      titles: ['“Ощущение времени”'],
      descriptions: [
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
      ],
      prices: ['40 000 ₽'],
    },
    finalPriceForOneTimePayment: '40 000 ₽',
    monthlyPayment: '8 700 ₽/мес.',
    installmentDuration: '5 месяцев',
    finalPriceForInstallment: '43 500 ₽',
    benefit: '9%',
    pathPage: '/feeling-of-time',
  },
  {
    title: '“Пятое измерение”',
    courseContent: {
      titles: ['“Пятое измерение”'],
      descriptions: [
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
      ],
      prices: ['40 000 ₽'],
    },
    finalPriceForOneTimePayment: '40 000 ₽',
    monthlyPayment: '8 700 ₽/мес.',
    installmentDuration: '5 месяцев',
    finalPriceForInstallment: '43 500 ₽',
    benefit: '9%',
    pathPage: '/fifth-dimension',
  },
  {
    title: '“Седьмое небо”',
    courseContent: {
      titles: ['“Седьмое небо”'],
      descriptions: [
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
      ],
      prices: ['40 000 ₽'],
    },
    finalPriceForOneTimePayment: '40 000 ₽',
    monthlyPayment: '8 700 ₽/мес.',
    installmentDuration: '5 месяцев',
    finalPriceForInstallment: '43 500 ₽',
    benefit: '9%',
    pathPage: '/seventh-heaven',
  },
  {
    title: '“Коннакол”',
    courseContent: {
      titles: ['“Коннакол”'],
      descriptions: [
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
      ],
      prices: ['32 000 ₽'],
    },
    finalPriceForOneTimePayment: '32 000 ₽',
    monthlyPayment: '8 700 ₽/мес.',
    installmentDuration: '4 месяцев',
    finalPriceForInstallment: '34 800 ₽',
    benefit: '7%',
    pathPage: '/connacol',
  },
  {
    title: '“Ключи полиритмии”',
    courseContent: {
      titles: ['“Ключи полиритмии”'],
      descriptions: [
        'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
      ],
      prices: ['8 700 ₽'],
    },
    finalPriceForOneTimePayment: '8 700 ₽',
    monthlyPayment: '',
    installmentDuration: '',
    finalPriceForInstallment: '',
    benefit: '',
    pathPage: '/polyrhythmic-keys',
  },
]

export { modalFormMock }
