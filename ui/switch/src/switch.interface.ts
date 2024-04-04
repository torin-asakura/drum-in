import { PropsWithChildren } from 'react'

import { RolePaymentForm }   from '@shared/constants'

export interface SwitchProps extends PropsWithChildren {
  active: Array<RolePaymentForm>
}
