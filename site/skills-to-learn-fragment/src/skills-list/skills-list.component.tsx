import React from 'react'
import {FC} from 'react'

import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'

import { ImageBlock }      from '../image-block'

import { Skills }          from '../skills'
import { BackgroundField } from '../backgound-field'
import { BlockDecoration } from '../block-decoration/block-decoration.component'

const SkillsList:FC = () => {
    const before = {
        textBlock: [
          {
            header: 'ВЫ НАУЧИТЕСЬ',
            content: [
              'исполнять и слышать различные виды длительностей (четверти, восьмые, шестнадцатые, триоли, квинтоли и т.д.)',
              'определять размер такта (в том числе сложные и переменные размеры)',
              'Читать ритмические тексты',
              'Делать акценты на любые доли',
              'Играть полиритмию',
              'Играть и петь свинг',
            ],
          },
          {
            header: 'ВЫ ПОЛУЧИТЕ',
            content: [
              'преодоление физического двигательного барьера',
              'развитие обоих полушарий головного мозга',
              'навык нотной записи ритма',
              'практику на перкуссии',
              'практику работы с метрономом',
              'контроль темпа',
            ],
          },
        ],
      }
    return(
        <>
    <Column width='100%' alignItems='center' display={['none', 'none', 'flex']}>
      <Layout width='1440px'>
        <Layout>
          <Layout flexBasis={100} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={60} flexShrink={0} />
            <Skills items={before} />
          </Column>
          <Layout flexBasis={55} flexShrink={0} />
          <Column width='100%' alignItems='center'>
            <Layout width='490px' height='500px'>
              <ImageBlock />
            </Layout>
          </Column>
        </Layout>
      </Layout>
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Layout>
          <Column width='100%' alignItems='center'>
            <Layout width='490px' height='500px'>
              <ImageBlock />
            </Layout>
          </Column>
          <Layout flexBasis={140} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={60} flexShrink={0} />
            <Skills items={before} />
          </Column>
          <Layout flexBasis={55} flexShrink={0} />
        </Layout>
      </Layout>
    </Column>
    <Column display={['flex','flex','none']}>
      <Row>
        <Layout flexBasis={15} flexShrink={0} />
        <BackgroundField>
        <Skills items={before} />
        </BackgroundField>
        <Layout flexBasis={15} flexShrink={0} />
      </Row>
      <Layout flexBasis={20} flexShrink={0} />
      <Layout width='320px' height='320px' style={{zIndex:1}}>
        <ImageBlock />
      </Layout>
      <Layout flexBasis={20} flexShrink={0}>
      </Layout>
      <Row>
        <Layout flexBasis={15} flexShrink={0} />
        <BackgroundField>
        <Skills items={before} />
        </BackgroundField>
        <Layout flexBasis={15} flexShrink={0} />
      </Row>
      <Layout flexBasis={20} flexShrink={0} />
      <Layout width='320px' height='320px' style={{zIndex:1}}>
        <ImageBlock />
      </Layout>
      <Layout flexBasis={20} flexShrink={0} >
      </Layout>
      <Row>
        <Layout flexBasis={15} flexShrink={0} />
        <BackgroundField>
        <Skills items={before} />
        </BackgroundField>
        <Layout flexBasis={15} flexShrink={0} />
      </Row>
      <Layout width='320px' height='320px' style={{zIndex:1}}>
        <ImageBlock />
      </Layout>
      <Layout flexBasis={30} flexShrink={0}>
      </Layout>
    </Column>
  </>
    )
}
  
export {SkillsList}
