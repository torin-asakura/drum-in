import { telegramPattern } from './patterns'

export const telegramValidator = (telegram: string): boolean => telegramPattern.test(telegram)
