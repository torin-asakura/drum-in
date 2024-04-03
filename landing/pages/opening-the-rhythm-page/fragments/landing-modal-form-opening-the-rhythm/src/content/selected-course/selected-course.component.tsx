import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { FormattedNumber }     from 'react-intl'
import { useState }            from 'react'

import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { CrossMenuIcon }       from '@ui/icons'
import { ReturnIcon }          from '@ui/icons'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Space }               from '@ui/text'
import { Text }                from '@ui/text'

import { Info }                from './info'
import { SelectedCourseProps } from './selected-course.interfaces'

const SelectedCourse: FC<SelectedCourseProps> = ({ title, description, price, recalculate }) => {
  const [remove, setRemove] = useState<boolean>(false)
  const handlerToggleRemove = () => {
    remove ? setRemove(false) : setRemove(true) // eslint-disable-line
    if (typeof price !== 'undefined' && typeof recalculate === 'function')
      recalculate(price, remove)
  }
  return (
    <Row>
      <Box
        width='100%'
        backgroundColor={
          remove ? 'background.veryTransparentSmokyWhite' : 'background.transparentWhite'
        }
        borderRadius={['semiMedium', 'medium', 'medium']}
      >
        <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[12, 16, 16]} flexShrink={0} />
          <Row alignItems='center'>
            <Condition match={remove}>
              <Text
                fontWeight='medium'
                fontSize={['micro', 'medium', 'medium']}
                lineHeight={['primary', 'medium', 'medium']}
                color='text.gray'
              >
                <FormattedMessage id='landing_modal_forms.you_deleted' />
                <Space />
                {title}
              </Text>
            </Condition>
            <Condition match={!remove}>
              <>
                <Box width={[155, 230, 230]}>
                  <Text
                    fontWeight='medium'
                    fontSize={['micro', 'medium', 'medium']}
                    lineHeight={['primary', 'medium', 'medium']}
                    color='text.smokyWhite'
                  >
                    <FormattedMessage id='landing_modal_forms.course' />
                    <Space />
                    {title}
                  </Text>
                </Box>
                <Layout flexBasis={[8, 16, 20]} flexShrink={0} />
                <Info description={description} />
                <Layout flexGrow={3} />
                <Condition match={!!price}>
                  <Box>
                    <Text
                      fontWeight='medium'
                      fontSize={['micro', 'semiMedium', 'medium']}
                      lineHeight={['primary', 'primary', 'medium']}
                      color='text.smokyWhite'
                    >
                      <FormattedNumber
                        value={price || 0}
                        style='currency' // eslint-disable-line
                        currency='RUB'
                        maximumFractionDigits={0}
                      />
                    </Text>
                  </Box>
                </Condition>
              </>
            </Condition>
          </Row>
          <Layout flexBasis={[12, 12, 16]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[13, 13, 18]} flexShrink={0} />
      </Box>
      <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
      <Box display={['none', 'none', 'flex']}>
        <Button
          size='middlingPaddingSemiBigHeight'
          variant={remove ? 'veryTransparentSmokyWhiteBackground' : 'transparentWhiteBackground'}
          onClick={handlerToggleRemove}
        >
          <Condition match={remove}>
            <ReturnIcon width={20} height={20} />
          </Condition>
          <Condition match={!remove}>
            <CrossMenuIcon width={20} height={20} color='rgb(128, 127, 127)' />
          </Condition>
        </Button>
      </Box>
      <Box display={['flex', 'flex', 'none']}>
        <Button
          size='semiLittlePaddingSemiMediumHeight'
          variant={remove ? 'veryTransparentSmokyWhiteBackground' : 'transparentWhiteBackground'}
          onClick={handlerToggleRemove}
        >
          <Condition match={remove}>
            <ReturnIcon width={20} height={20} />
          </Condition>
          <Condition match={!remove}>
            <CrossMenuIcon width={20} height={20} color='rgb(128, 127, 127)' />
          </Condition>
        </Button>
      </Box>
    </Row>
  )
}

export { SelectedCourse }
