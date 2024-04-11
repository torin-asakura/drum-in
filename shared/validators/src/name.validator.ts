import { namePattern } from './patterns'

export const nameValidator = (name: string): boolean => namePattern.test(name)
