import React    from 'react'

import { Layout } from '@ui/layout'

const List = ({ main }) => main.map((item) => <Layout>{item}</Layout>)

export { List }
