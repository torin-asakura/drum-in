import React from 'react'

import {Global} from '@emotion/react'
import {css}  from '@emotion/react'

export const GlobalStyles = () => (
    <Global
        styles = {css`
            html{
                height:100%;
            }
            body{
                height:100%;
                width:100%;
                margin:0;
                padding:0;
                overflow-x:hidden;

            }
            #__next {
                display: flex;
                min-height: 100%;
                flex-direction: column;
                background-color: #f7f7fa;
                overflow-x: hidden;
              }
        `}
/>
)