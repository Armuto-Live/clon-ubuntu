import { styled } from '@mui/material'
import React from 'react'

const LineFooter=styled('hr')(({theme})=>({
    display:"none",
    marginTop:"2rem",
    marginBottom:"calc(.5rem - 1px)",
    border:"thin solid #d9d9d9",
    [theme.breakpoints.up('sm')]:{
        display:"block",
    }
}))

export const Line = () => {
  return (
    <LineFooter/>
  )
}
