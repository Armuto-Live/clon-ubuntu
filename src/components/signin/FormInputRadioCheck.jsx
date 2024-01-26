import { styled } from "@mui/material";

const LoginFormRadio = styled("input")(({ theme }) => ({
  margin: "0",
  width: "1rem",
  height: "1rem",
  maxWidth:"1rem",
  maxHeight:"1rem",
  display:"block",
  cursor:"pointer",
}));

export const FormInputRadioCheck = ({ id, type, value, name, onChange,defaultChecked }) => {
  return (
    <LoginFormRadio
      type={type}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
  );
};
