import React      from 'react'

import { Layout } from '@ui/layout'

const List = ({ main }) => (main !== null ? main.map((item) => <Layout>{item}</Layout>) : null)

export { List }
