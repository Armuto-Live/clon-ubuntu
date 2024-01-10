import { styled } from '@mui/material'
import React from 'react'

const LineSeparatorHr=styled('hr')((theme)=>({
    marginLeft:"auto",
    marginRight:"auto",
    margin:"2rem 0",
    height:"1px",
    maxWidth:"80rem",
    padding: "0 1rem",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80rem",
    "@media (min-width: 620px)": {
      padding: "0 1.5rem",
      margin: "0 auto",
      fontSize: "1rem",
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
