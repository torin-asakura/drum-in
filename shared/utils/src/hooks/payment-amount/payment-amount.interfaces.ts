import { RolePaymentForm } from './payment-amount.constants'


export type UsePaymentAmountType = (roleVar:RolePaymentForm,installmentAmount:number,oneTimeAmount:number) => {amount:number}
