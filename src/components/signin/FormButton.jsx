import { styled} from '@mui/material';
import React from 'react'

const ButtonSubmit = styled("button")(({ theme }) => ({
    backgroundColor: "#0e8420",
    border: "thin solid #0e8420",
    color: "#fff",
    padding: "calc(.4rem - 1px) .75rem",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: "300",
    fontFamily: "ubuntu",
    transition: "background-color 0.165s cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    width:"100%",
    "&:hover": {
      backgroundColor: "#095615",
      cursor: "pointer",
    },
    [theme.breakpoints.up('xs')]:{
      width:"inherit"
    }
  }));

export const FormButton = ({text}) => {
  return (
    <ButtonSubmit type='submit'>{text}</ButtonSubmit>
  )
}
