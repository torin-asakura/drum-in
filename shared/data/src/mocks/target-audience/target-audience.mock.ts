import { TargetAudience } from './target-audience.interface'

const targetAudienceMock: TargetAudience[] = [
  {
    pathPage: '/feeling-of-time',
    firstText: 'Только начинаете свой музыкальный путь',
    secondText: 'Ощущаете непонимание музыкального времени',
    thirdText: 'Испытываете сложности при удержании темпа и снятии партий',
  },
  {
    pathPage: '/fifth-dimension',
    firstText: 'Вполне справляетесь с основными длительностями',
    secondText: 'Хотите узнать новые пульсации сложные размеры',
    thirdText: 'Хотите узнать новые ритмические паттерны',
  },
  {
    pathPage: '/seventh-heaven',
    firstText: 'Уже успели пройти предыдущие два уровня',
    secondText: 'Хотите владеть ритмом на профессиональном уровне',
    thirdText: 'Хотите узнать новые ритмические паттерны',
  },
]

export { targetAudienceMock }
