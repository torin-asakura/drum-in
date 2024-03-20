import React                            from 'react'
import { FormattedMessage }             from 'react-intl'
import { useState }                     from 'react'
import {useTeacher} from '@globals/data'

import { InvertedExclamationMarkIcon } from '@ui/icons'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Text }                        from '@ui/text'


const EducationMobile = () => {
  const [visibleEducation, setVisibleEducation] = useState<boolean>(false)

  const {teacherData} = useTeacher()

  return (
    <Box
      display={['flex', 'flex', 'none']}
      alignItems='center'
      position='relative'
      onClick={() => (visibleEducation ? setVisibleEducation(false) : setVisibleEducation(true))}
    >
      <Box>
        <Text fontWeight='medium' fontSize='large' lineHeight='small' color='text.smokyWhite'>
          <FormattedMessage id='landing_teacher.education' />
        </Text>
      </Box>
      <Layout flexBasis={12} flexShrink={0} />
      <Box
        flexShrink={0}
        alignItems='center'
        justifyContent='center'
        width={24}
        height={24}
        borderRadius='micro'
        backgroundColor={visibleEducation ? 'background.purple' : 'background.smokyWhite'}
      >
        <InvertedExclamationMarkIcon
          width={3}
          height={13}
          color={visibleEducation ? 'rgb(242,242,242)' : ''}
        />
      </Box>
      <Box
        display={visibleEducation ? 'flex' : 'none'}
        position='absolute'
        top={[-136, -196, 0]}
        right={[-160, -283, 0]}
        width={[177, 300, 0]}
        justifyContent='center'
        borderRadius={['medium', 'big', 'big']}
        backgroundColor='background.smokyWhite'
        border='normalPurple'
      >
        <Layout flexBasis={[12, 20, 0]} flexShrink={0} />
        <Column>
          <Layout flexBasis={[12, 20, 0]} />
          {[{element:''}].map(({ element }) => (
            <React.Fragment key={element.substring(0, 3)}>
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.blackAmber'
                >
                  {element}
                </Text>
              </Box>
              <Layout flexBasis={[6, 10, 0]} />
            </React.Fragment>
          ))}
          <Layout flexBasis={[6, 10, 0]} />
        </Column>
        <Layout flexBasis={[12, 20, 0]} flexShrink={0} />
      </Box>
    </Box>
  )
}
export { EducationMobile }
