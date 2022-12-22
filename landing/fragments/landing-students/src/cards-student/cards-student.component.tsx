import React                      from 'react'
import { useIntl }                from 'react-intl'

import { MarchingDrumIcon }       from '@ui/icons'
import { MicrophoneIcon }         from '@ui/icons'
import { MusicalNotesIcon }       from '@ui/icons'
import { SaxophoneIcon }          from '@ui/icons'
import { SaxophoneWithNotesIcon } from '@ui/icons'
import { ViolinIcon }             from '@ui/icons'
import { ViolinWithBowIcon }      from '@ui/icons'
import { DrumTurnedLeftIcon }     from '@ui/icons'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Slider }                 from '@ui/slider'
import { SwiperSlide }            from '@ui/slider'

import { BackgroundBlock }        from './background'
import { CardsSwiper }            from './cards-swiper'
import { Item }                   from './item'

const CardsStudent = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <Column display={['none', 'none', 'flex']}>
        <Row>
          <Slider clName='students-slider-desktop' spaceBetween={40} slidesPerView='auto'>
            <SwiperSlide>
              <Item
                fullName={formatMessage({
                  id: 'landing_students.elizaveta_musaelyan',
                  defaultMessage: 'Елизавета Мусаелян',
                })}
                age={formatMessage({
                  id: 'landing_students.thirty_two_years_old',
                  defaultMessage: '32 года',
                })}
                profession={formatMessage({
                  id: 'landing_students.saxophonist',
                  defaultMessage: 'Саксофонистка',
                })}
                description={formatMessage({
                  id: 'landing_students.one_of_the_first_students_vocalist_saxophonist',
                  defaultMessage:
                    'Один из перых учеников. Вокалистка, саксофонистка, композитор, бэнд лидер группы Cotton Air, одна из управляющих IndieRockSchool.',
                })}
                firstIcon={<SaxophoneWithNotesIcon width={110} height={110} />}
                verticalPositionFirstIcon={-70}
                horizontalPositionFirstIcon={40}
                secondIcon={<SaxophoneIcon width={110} height={110} />}
                verticalPositionSecondIcon={-112}
                horizontalPositionSecondIcon={220}
                rotateCard={-4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Item
                fullName={formatMessage({
                  id: 'landing_students.alexey_lazarev',
                  defaultMessage: 'Алексей Лазарев',
                })}
                age={formatMessage({
                  id: 'landing_students.forty_years',
                  defaultMessage: '40 лет',
                })}
                profession={formatMessage({
                  id: 'landing_students.drummer',
                  defaultMessage: 'Барабанщик',
                })}
                description={formatMessage({
                  id: 'landing_students.already_the_drummer_of_the_bands_persephone_and_bird',
                  defaultMessage:
                    'Уже барабанщик групп Персефона и Птица, пришел в школу 10 лет назад с нуля, обучался игре на барабанах в течении 3-х лет.',
                })}
                firstIcon={<DrumTurnedLeftIcon width={110} height={110} />}
                verticalPositionFirstIcon={-70}
                horizontalPositionFirstIcon={40}
                secondIcon={<MarchingDrumIcon width={110} height={110} />}
                verticalPositionSecondIcon={-115}
                horizontalPositionSecondIcon={220}
                rotateCard={-4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Item
                fullName={formatMessage({
                  id: 'landing_students.maya_gorat',
                  defaultMessage: 'Майа Горят',
                })}
                age={formatMessage({
                  id: 'landing_students.thirty_one_years_old',
                  defaultMessage: '31 год',
                })}
                profession={formatMessage({
                  id: 'landing_students.violinist',
                  defaultMessage: 'Скрипачка',
                })}
                description={formatMessage({
                  id: 'landing_students.came_to_school_5_years_ago_collected_a_lot_rhythmic_techniques',
                  defaultMessage:
                    'Пришла в школу 5 лет назад. Собрала много полезных ритмических приёмов, которые использует сейчас при написании песен и работе в театре.',
                })}
                firstIcon={<ViolinIcon width={110} height={110} />}
                verticalPositionFirstIcon={-90}
                horizontalPositionFirstIcon={60}
                secondIcon={<ViolinWithBowIcon width={110} height={110} />}
                verticalPositionSecondIcon={-100}
                horizontalPositionSecondIcon={265}
                rotateCard={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Item
                fullName={formatMessage({
                  id: 'landing_students.anfisa_shelekhina',
                  defaultMessage: 'Анфиса Шелехина',
                })}
                age={formatMessage({
                  id: 'landing_students.twenty_eight_years_old',
                  defaultMessage: '28 лет',
                })}
                profession={formatMessage({
                  id: 'landing_students.vocalist',
                  defaultMessage: 'Вокалистка',
                })}
                description={formatMessage({
                  id: 'landing_students.came_to_school_for_advanced_training_completed_two_levels',
                  defaultMessage:
                    'Пришла в школу для повышения квалификации. Завершила 2 уровня и спустя 10 месяцев начала применять знания в собственных аранжировках.',
                })}
                firstIcon={<MicrophoneIcon width={110} height={110} />}
                verticalPositionFirstIcon={-85}
                horizontalPositionFirstIcon={80}
                secondIcon={<MusicalNotesIcon width={110} height={110} />}
                verticalPositionSecondIcon={-110}
                horizontalPositionSecondIcon={220}
                rotateCard={4}
              />
            </SwiperSlide>
          </Slider>
        </Row>
        <Layout flexBasis={[64, 70, 42]} />
        <BackgroundBlock />
      </Column>
      <CardsSwiper />
    </>
  )
}
export { CardsStudent }
