import { FORM }        from './constants'
import { useFormData } from './queries'

const useData = () => {
  return useFormData(FORM)
}

export { useData }
