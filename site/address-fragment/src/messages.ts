import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  addressHeader: {
    id: `${name}.address_header`,
    defaultMessage: 'АДРЕС:',
  },
  addressCity: {
    id: `${name}.address_city`,
    defaultMessage: 'Ялта,',
  },
  addressStreet: {
    id: `${name}.address_street`,
    defaultMessage: 'ул. Поликуровская, 27',
  },
  addressHeaderMobile: {
    id: `${name}.address_header_mobile`,
    defaultMessage: 'СХЕМА ПРОЕЗДА',
  },
  addressMobile: {
    id: `${name}.address_mobile`,
    defaultMessage: 'АДРЕС:',
  },
  addressStreetMobile: {
    id: `${name}.address_street_mobile`,
    defaultMessage: 'м. Таганская (кольецвая)',
  },
  addressLaneMobule: {
    id: `${name}.address_lane_mobile`,
    defaultMessage: 'тетеринский пер., д. 8 стр. 1',
  },
})
