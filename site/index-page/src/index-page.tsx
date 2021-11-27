import React            from 'react'
import {useState}       from 'react'
import {useEffect}      from 'react'
 
import { GlobalStyles } from '@ui/theme'
import { Row }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import {Condition}  from '@ui/condition'

import { Desktop }      from './desktop.component'
import { Mobile }       from './mobile.component'


const IndexPage = () => {
  //TODO make condition change work
  const [media,setMedia] = useState(false)
  useEffect(()=>{ setMedia(window.matchMedia('(max-width:320px)'))},[setMedia])
  return (
    <Row justifyContent='center'>
      <GlobalStyles />
      <Layout width={['320px', '320px','1440px']}>
      <Condition match={media}>
      <Desktop />
      </Condition>
      <Condition match={!media}>
      <Mobile />
      </Condition>
      </Layout>
    
    </Row>
  )
}

export default IndexPage
