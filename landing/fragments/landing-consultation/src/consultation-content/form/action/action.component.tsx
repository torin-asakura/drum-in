import React                           from 'react'
import { FC }                          from 'react'
import { useState }                    from 'react'

import { Button }                      from '@ui/button/src'
import { CheckboxMobile }              from '@ui/checkbox/src'
import { Checkbox }                    from '@ui/checkbox/src'
import { Row }                         from '@ui/layout/src'
import { Layout }                      from '@ui/layout/src'
import { Box }                         from '@ui/layout/src'
import { Text }                        from '@ui/text/src'
import { useConsultationFormMutation } from '@globals/data/src/hooks/forms'

import { ActionProps }                 from './action.interfaces'
import { fieldsValidator }             from './validators'

export const Action: FC<ActionProps> = ({ fields, submitText, checkboxText }) => {
  const [checkbox, setCheckbox] = useState<boolean>(false)

  const { submitConsultationForm } = useConsultationFormMutation()

  const handleSubmitForm = () => submitConsultationForm(fields)

  const isValidFields = fieldsValidator(fields)

  return (
    <>
      <Box display={['none', 'flex', 'flex']}>
        <Button
          disabled={!isValidFields || !checkbox}
          size='withoutPaddingSemiBigHeight'
          variant='purpleBackground'
          fill
          onClick={handleSubmitForm}
        >
          <Text fontWeight='semiBold' fontSize='medium' textTransform='uppercase'>
            {submitText}
          </Text>
        </Button>
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Button
          disabled={!isValidFields || !checkbox}
          size='withoutPaddingSemiRegularHeight'
          variant='purpleBackground'
          fill
          onClick={handleSubmitForm}
        >
          <Text fontWeight='semiBold' fontSize='semiMedium' textTransform='uppercase'>
            {submitText}
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[16, 20, 20]} flexShrink={0} />
      <Row display={['none', 'flex', 'flex']}>
        <Checkbox checked={checkbox} onCheck={setCheckbox}>
          {checkboxText}
        </Checkbox>
      </Row>
      <Row display={['flex', 'none', 'none']}>
        <CheckboxMobile checked={checkbox} onCheck={setCheckbox}>
          {checkboxText}
        </CheckboxMobile>
      </Row>
    </>
  )
}
