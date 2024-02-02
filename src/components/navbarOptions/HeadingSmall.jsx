import { Typography, styled } from '@mui/material'
import React from 'react'

const  Title=styled(Typography)(({theme})=>({
    fontSize:"12.25px",
    marginBottom:".25rem",
    paddingTop:".5rem",
    textTransform:"uppercase",
    fontWeight:"275",
}))
export const HeadingSmall = ({text,sx}) => {
  return (
    <Title sx={sx}>{text}</Title>
  )
}
