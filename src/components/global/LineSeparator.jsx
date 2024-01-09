import { styled } from '@mui/material'
import React from 'react'

const LineSeparatorHr=styled('hr')((theme)=>({
    margin:"2rem 0",
    height:"1px",
}))

export const LineSeparator = () => {
  return (
      <LineSeparatorHr/>
  )
}
