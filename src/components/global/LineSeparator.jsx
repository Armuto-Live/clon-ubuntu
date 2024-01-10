import { styled } from '@mui/material'
import React from 'react'

const LineSeparatorHr=styled('hr')((theme)=>({
  margin:"2rem 0",
    marginLeft:"auto",
    marginRight:"auto",
    border:"0",
    backgroundColor:"rgba(0, 0, 0, 0.2)",
    height:"1px",
    maxWidth:"80rem",
    padding: "0 1rem",
    maxWidth: "80rem",
    "@media (min-width: 620px)": {
      padding: "2 1.5rem",
      margin: "2rem auto",
      fontSize: "1rem",
    },
    "@media (min-width: 1037px)": {
      margin:"4rem 0",
    },
    "@media (min-width: 1681px)": {
      padding: "0 27px",
    },
}))

export const LineSeparator = () => {
  return (
      <LineSeparatorHr/>
  )
}
