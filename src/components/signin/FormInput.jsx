import React from 'react'
import { styled } from "@mui/material";

const FormInputContent = styled("input")(({ theme }) => ({
    border: "1px solid #999",
    padding: "calc(.4rem - 1px) .5rem",
    marginBottom: ".7rem",
    fontSize: "1rem",
    fontWeight: "100",
    width: "100%",
    lineHeight: "1.5rem",
  }));
  
export const FormInput = ({type,placeholder}) => {
  return (
    <FormInputContent type={type} placeholder={placeholder}/>
  )
}
