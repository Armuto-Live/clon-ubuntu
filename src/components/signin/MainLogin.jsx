import React from "react";
import { FormInput,FormButton } from "./index";
import { styled, Box } from "@mui/material";

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
  "&:hover": {
    backgroundColor: "#095615",
    cursor: "pointer",
  },
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
  "&:hover": {
    backgroundColor: "#00000020",
    cursor: "pointer",
  },
}));

export const MainLogin = () => {
  return (
    <>
      <FormInput placeholder="Contraseña" />
      <Box>
        <FormButton text="Iniciar sesión" />
        <InputSubmit type="submit" value="Forgot your password?" />
      </Box>
    </>
  );
};
