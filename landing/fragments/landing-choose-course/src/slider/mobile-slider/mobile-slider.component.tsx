import React                       from 'react'
import { Children }                from 'react'
import { useMemo }                 from 'react'
import { useEffect }               from 'react'
import { useState }                from 'react'

import { Courses as CCourses }     from '@shared/data'
import { ModalForm as MModalForm } from '@shared/data'
import { Slider }                  from '@ui/slider'
import { SwiperSlide }             from '@ui/slider'
import { useMockedModalForm }      from '@shared/data'
import { useMockedCourses }        from '@shared/data'

import { Slide }                   from '../slide'
import { getModal }                from '../../helpers'
import { getUi }                   from '../../helpers'

const MobileSliderBlock = () => {
  const { courses: coursesData } = useMockedCourses()
  const [courses, setCourses] = useState<CCourses[]>(coursesData)
  const { modalForm: modalFormData } = useMockedModalForm()
  const [modalForm, setModalForm] = useState<MModalForm[]>(modalFormData)

  useEffect(() => {
    setModalForm(modalFormData)
    setCourses(coursesData)
    // eslint-disable-next-line
  }, [])

  const coursesChildren = useMemo(
    () =>
      courses.map((
        {
          title,
          level,
          desc,
          price,
          quantityVideoLessons,
          circleFirstLine,
          circleSecondLine,
          quantityMonths,
          textMonths,
          itemId,
        },
        index
      ) => (
        <Slide
          title={title}
          level={level}
          desc={desc}
          price={price}
          squareRotate={getUi(itemId).squareRotateMobile}
          squarePositionX={getUi(itemId).squarePositionXMobile}
          squarePositionY={getUi(itemId).squarePositionYMobile}
          quantityVideoLessons={quantityVideoLessons}
          rectangleRotate={getUi(itemId).rectangleRotateMobile}
          rectanglePositionX={getUi(itemId).rectanglePositionXMobile}
          rectanglePositionY={getUi(itemId).rectanglePositionYMobile}
          quantityMonths={quantityMonths}
          textMonths={textMonths}
          rectangleColor={getUi(itemId).rectangleColor}
          circlePositionX={getUi(itemId).circlePositionXMobile}
          circlePositionY={getUi(itemId).circlePositionYMobile}
          circleFirstLine={circleFirstLine}
          circleSecondLine={circleSecondLine}
          titleModal={modalForm[index].title}
          courseContent={modalForm[index].courseContent}
          display={getModal(modalForm[index].pathPage).display}
          finalPriceForOneTimePayment={modalForm[index].finalPriceForOneTimePayment}
          finalPriceForInstallment={modalForm[index].finalPriceForInstallment}
          monthlyPayment={modalForm[index].monthlyPayment}
          installmentDuration={modalForm[index].installmentDuration}
          benefit={modalForm[index].benefit}
        />
      )),
    [courses, modalForm]
  )

  return (
    <Slider
      clName='choose-courses-slider'
      spaceBetween={16}
      slidesPerView='auto'
      progressbar
      autoHeight
      loop
    >
      {Children.map(coursesChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}

export { MobileSliderBlock }
