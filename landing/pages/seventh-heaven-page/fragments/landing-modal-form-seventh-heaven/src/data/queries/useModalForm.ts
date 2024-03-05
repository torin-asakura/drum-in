import { useQuery }       from '@apollo/client'

import { GET_MODAL_FORM } from './modal-form.query'

const useModalForm = () => useQuery(GET_MODAL_FORM).data?.courseSeventhHeavenItem?.modalForm

export { useModalForm }
