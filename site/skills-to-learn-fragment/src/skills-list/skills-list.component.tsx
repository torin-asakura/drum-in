import React                    from 'react'
import { FC }                   from 'react'

import { Column }               from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'
import { extractUrl }           from '@globals/data'

import { ImageBlock }           from '../image-block'
import { Skills }               from '../skills'
import { ContainerRelative }    from '../container-relative'
import { useCourseDescription } from '../data'

const SkillsList: FC = () => {
  const courseDescription = useCourseDescription()

  const before = courseDescription.filter((desc) => desc?.addons.side === 'left')
  const after = courseDescription.filter((desc) => desc?.addons.side === 'right')

  const imageBefore = {
    url: extractUrl(before[0]?.addons.picture),
    alt: before[0]?.addons.picture.altText,
  }
  const imageAfter = {
    url: extractUrl(after[0]?.addons.picture),
    alt: after[0]?.addons.picture.altText,
  }

  return (
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
            <Column width='100%'>
              <ImageBlock stripes src={imageBefore.url} alt={imageBefore.alt} />
            </Column>
          </Layout>
        </Layout>
        <Layout width='1440px' display={['none', 'none', 'flex']}>
          <Layout>
            <Column width='100%' alignItems='center'>
              <ImageBlock stripes src={imageAfter.url} alt={imageAfter.alt} />
            </Column>
            <Layout flexBasis={140} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={60} flexShrink={0} />
              <Skills items={after} />
            </Column>
            <Layout flexBasis={55} flexShrink={0} />
          </Layout>
        </Layout>
      </Column>
      <Column display={['flex', 'flex', 'none']}>
        <Row>
          <Layout flexBasis={15} flexShrink={0} />
          <ContainerRelative height={['905px', '905px', '0px']}>
            <Skills items={before} />
          </ContainerRelative>
          <Layout flexBasis={15} flexShrink={0} />
        </Row>
        <Layout width='320px' height='320px' style={{ zIndex: 1 }}>
          <ImageBlock src={imageBefore.url} alt={imageBefore.alt} />
        </Layout>
        <Row>
          <Layout flexBasis={15} flexShrink={0} />
          <ContainerRelative height={['925px', '925px', '0px']}>
            <Skills items={before} />
          </ContainerRelative>
          <Layout flexBasis={15} flexShrink={0} />
        </Row>
        <Layout flexBasis={20} flexShrink={0} />
        <Layout width='320px' height='320px' style={{ zIndex: 1 }}>
          <ImageBlock src={imageAfter.url} alt={imageAfter.alt} />
        </Layout>
        <Row>
          <Layout flexBasis={15} flexShrink={0} />
          <ContainerRelative height={['925px', '925px', '0px']}>
            <Skills items={before} />
          </ContainerRelative>
          <Layout flexBasis={15} flexShrink={0} />
        </Row>
      </Column>
    </>
  )
}

export { SkillsList }
