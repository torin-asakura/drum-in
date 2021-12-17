import React from 'react'
import {FC} from 'react'
import {Box} from '@ui/layout'

const BlockDecoration:FC<number| string> = ({size,color}) =>
 <Box flexBasis={size} backgroundColor={color}/>

export {BlockDecoration}
