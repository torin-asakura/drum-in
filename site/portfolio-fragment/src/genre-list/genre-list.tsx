import React      from 'react'
import { FC }     from 'react'

import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const GenreList: FC = () => {
  const genres = [
    'Практика игры в 4х оркестрах - Мисс Джаз, Moscow Swing College Band, учебный оркестр ГКА им. Маймонида, оркестр Воздушно-Космических Сил.',
    'Играла элегантный джаз с певицами Евгенией Браганцевой, Ольгой Герчаковой, Софьей Бойковой,   с уникальными ребятами из Cotton Air.',
    'Играла зажигательные rock-n-roll и blues с кавер-группами Клягин&Терешина Band, ZooSound.',
    'Давала жару на рок-концертах с певицей Элей Чавес.',
    'Играла и пела солнечное raggey с Рапапам и Дабчикидаб.',
    'Постигала downtempo, trance, psychill с лидером российской электронной сцены в проекте MAIIA.',
    'Этнические мотивы развивала с группами ОкоБогаРа, оркестром РадостьБэнд.',
    'Съездила поработать в составе girls cover band в Китай.',
    'Записала альбомы в составе групп Полынья и LIMARI.',
    'Также сессионно выступала с коллективами и артистами OTTA Orkestra, Arambic и Тигран Петросян, Never Again, Кукуруза, Елена Липаева и Мини-оркестр, Jazz-Ladies, Просто Джаз, Bubbles Band, Salegy(Россия-Мадагаскар), Полина Воденисова, Полина Райкина (театр Сатирикон), Вишвамбар, Лера Банина, Chronos, Мастерская Воздуха, в фаершоу Камикадзе и театре Огни Большого Города.',
  ]

  return (
    <Column>
      {genres.map((item) => (
        <>
          <Layout>
            <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
              {item}
            </Text>
          </Layout>
          <Layout flexBasis={40} />
        </>
      ))}
    </Column>
  )
}

export { GenreList }
