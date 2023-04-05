import { FORM }        from './constants'
import { useFormData } from './queries'

const useData = () => {
  const form = useFormData(FORM)

  return form
}

export { useData }
