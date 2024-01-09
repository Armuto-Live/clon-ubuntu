import React from 'react'

import { styled } from '@mui/material'

const LineWidth=styled('hr')((theme)=>({
    marginLeft:"auto",
    marginRight:"auto",
    border:"0",
    height:"1px",
    marginTop:"0",
    position:"relative",
    width:"100%",
    backgroundColor:"rgba(0,0,0,.2)",
    marginBottom:"calc(.5rem - 1px)",
}))

export const Line = () => {
  return (
    <LineWidth/>
  )
}
