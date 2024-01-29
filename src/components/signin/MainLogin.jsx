import React from "react";
import { FormInputText,FormButton } from "./index";
import { styled, Box } from "@mui/material";

const ContentButton=styled(Box)(({theme})=>({
  display:"flex",
  flexWrap:"wrap",

}));

const InputSubmit = styled("input")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "thin solid transparent",
  color: "#000",
  padding: "calc(.4rem - 1px) .75rem",
  fontFamily: "ubuntu",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: "300",
  marginLeft: ".3rem",
  transition: "background-color 0.165s cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  width:"100%",
  "&:hover": {
    backgroundColor: "#00000020",
    cursor: "pointer",
  },
  [theme.breakpoints.up('xs')]:{
    width:"inherit"
  }
}));

export const MainLogin = () => {
  return (
    <>
      <FormInputText placeholder="Contraseña" />
      <ContentButton>
        <FormButton text="Iniciar sesión" />
        <InputSubmit type="submit" value="Forgot your password?" />
      </ContentButton>
    </>
  );
};
