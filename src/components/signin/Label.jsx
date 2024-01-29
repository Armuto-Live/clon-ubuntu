import { styled } from '@mui/material';
import React from 'react'

const LoginFormLabel = styled("label")(({ theme }) => ({
    cursor: "pointer",
    display: "inline-block",
    marginBottom: ".6rem",
    marginTop: "0",
    paddingTop: ".4rem",
  }));

export const Label = ({children,htmlFor,sx}) => {
  return (
    <LoginFormLabel sx={sx} htmlFor={htmlFor}>{children}</LoginFormLabel>
  )
}
