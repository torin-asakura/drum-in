import { phonePattern } from './patterns'

export const phoneValidator = (phone: string): boolean => phonePattern.test(phone)
