import React                                 from 'react'
import { FC }                                from 'react'
import { motion }                            from 'framer-motion'
import { useRouter }                         from 'next/router'
import { useState }                          from 'react'
import { useEffect }                         from 'react'
import { useIntl }                           from 'react-intl'

import { ModalForm as MModalForm }           from '@shared/data'
import { Condition }                         from '@ui/condition'
import { Column }                            from '@ui/layout'
import { Layout }                            from '@ui/layout'
import { Box }                               from '@ui/layout'
import { useMockedModalForm }                from '@shared/data'

import { Backdrop }                          from './backdrop'
import { BuyPackageContent }                 from './buy-package-content'
import { Container }                         from './container'
import { IndividualCourseContent }           from './individual-course-content'
import { IndividualCourseWithChoiceContent } from './individual-course-with-choice-content'
import { CurrentDataProps }                  from './modal-forms.interfaces'
import { ModalFormsProps }                   from './modal-forms.interfaces'
import { Renderer }                          from './renderer'
import { getUi }                             from './helpers'

const ModalForms: FC<ModalFormsProps> = ({
  activeRender,
  onClose,
  scroll = true,
  display,
  title,
  courseContent,
  finalPriceForOneTimePayment,
  monthlyPayment,
  installmentDuration,
  finalPriceForInstallment,
  benefit,
}) => {
  const [roleVar, setRole] = useState<Array<string>>(['Рассрочка'])
  const { formatMessage } = useIntl()
  const options = [
    {
      value: formatMessage({
        id: 'landing_modal_forms.installment_plan',
        defaultMessage: 'Рассрочка',
      }),
      mutuallyExclusive: true,
    },
    {
      value: formatMessage({
        id: 'landing_modal_forms.one_time_payment',
        defaultMessage: 'Разовый платёж',
      }),
      mutuallyExclusive: true,
    },
  ]

  const router = useRouter()
  const { modalForm: modalFormData } = useMockedModalForm()
  const [modalForm, setModalForm] = useState<MModalForm[]>([])

  useEffect(() => {
    setModalForm(modalFormData)
    // eslint-disable-next-line
  }, [])

  let modalFormCurrentData: CurrentDataProps = {
    display: getUi(router.route).display,
    title: '',
    courseContent: {
      titles: [''],
      descriptions: [''],
      prices: [''],
    },
    finalPriceForInstallment: '',
    finalPriceForOneTimePayment: '',
    installmentDuration: '',
    benefit: '',
    monthlyPayment: '',
  }

  for (let i = 0; modalForm.length >= i; i += 1) {
    if (modalForm[i] !== undefined && modalForm[i].pathPage === router.route) {
      modalFormCurrentData = {
        display: getUi(modalForm[i].pathPage).display,
        title: modalForm[i].title,
        courseContent: modalForm[i].courseContent,
        finalPriceForInstallment: modalForm[i].finalPriceForInstallment,
        finalPriceForOneTimePayment: modalForm[i].finalPriceForOneTimePayment,
        installmentDuration: modalForm[i].installmentDuration,
        benefit: modalForm[i].benefit,
        monthlyPayment: modalForm[i].monthlyPayment,
      }
    }
    if (modalForm[i] !== undefined && router.route === '/') {
      modalFormCurrentData = {
        display,
        title,
        courseContent,
        finalPriceForInstallment,
        finalPriceForOneTimePayment,
        installmentDuration,
        benefit,
        monthlyPayment,
      }
    }
  }

  return (
    <Renderer active={activeRender}>
      <motion.div
        style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 900 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{ position: 'fixed', right: '-100%', top: 0, height: '100%', zIndex: 950 }}
        animate={{ right: 0 }}
        exit={{ right: '-100%' }}
        transition={{ duration: 0.5 }}
        id='modal-form'
      >
        <Container scroll={scroll}>
          <Box width={[370, 630, 666]}>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={[15, 42, 48]} flexShrink={0} />
              <Condition match={modalFormCurrentData.display === 'buy-package-of-courses'}>
                <BuyPackageContent
                  onClose={onClose}
                  roleVar={roleVar}
                  options={options}
                  setRole={setRole}
                  title={modalFormCurrentData.title}
                  courseContent={modalFormCurrentData.courseContent}
                  finalPriceForOneTimePayment={modalFormCurrentData.finalPriceForOneTimePayment}
                  monthlyPayment={modalFormCurrentData.monthlyPayment}
                  installmentDuration={modalFormCurrentData.installmentDuration}
                  finalPriceForInstallment={modalFormCurrentData.finalPriceForInstallment}
                  benefit={modalFormCurrentData.benefit}
                />
              </Condition>
              <Condition match={modalFormCurrentData.display === 'buy-individual-course'}>
                <IndividualCourseContent
                  title={modalFormCurrentData.title}
                  courseContent={modalFormCurrentData.courseContent}
                  finalPriceForOneTimePayment={modalFormCurrentData.finalPriceForOneTimePayment}
                  onClose={onClose}
                />
              </Condition>
              <Condition
                match={modalFormCurrentData.display === 'buy-individual-course-with-choice'}
              >
                <IndividualCourseWithChoiceContent
                  onClose={onClose}
                  roleVar={roleVar}
                  options={options}
                  setRole={setRole}
                  title={modalFormCurrentData.title}
                  courseContent={modalFormCurrentData.courseContent}
                  finalPriceForOneTimePayment={modalFormCurrentData.finalPriceForOneTimePayment}
                  monthlyPayment={modalFormCurrentData.monthlyPayment}
                  installmentDuration={modalFormCurrentData.installmentDuration}
                  finalPriceForInstallment={modalFormCurrentData.finalPriceForInstallment}
                  benefit={modalFormCurrentData.benefit}
                />
              </Condition>
            </Column>
            <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          </Box>
        </Container>
      </motion.div>
    </Renderer>
  )
}

export { ModalForms }
