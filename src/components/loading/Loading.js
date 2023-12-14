import React from 'react'
import Load from '../../images/1488.gif'
import { DivLoading } from './Loading.styles'
function Loading() {
  return (
    <DivLoading>
        <img src={Load} alt="Loading" />
    </DivLoading>
  )
}

export default Loading