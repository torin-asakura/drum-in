import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  addressHeader: {
    id: `${name}.address_header`,
    defaultMessage: 'Адрес:',
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
    defaultMessage: 'схема проезда',
  },
  addressMobile: {
    id: `${name}.address_mobile`,
    defaultMessage: 'Адрес:',
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
