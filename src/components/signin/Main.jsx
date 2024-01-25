import { useState } from "react";

import { styled, Box, Typography } from "@mui/material";
import { MainLogin,MainRegister,FormInput } from "./index";
import {
  PStrip,
  LayoutMaxWidth,
  GridRow,
  Line,
} from "../global/index";



const Content = styled(Box)(({ theme }) => ({}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2.22819rem",
  lineHeight: "3rem",
  paddingTop: "0.166rem",
  marginTop: "-0.5rem",
  fontWeight: "100",
  color: "white",
  marginBottom: "-0.165rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.91029rem",
    lineHeight: "3.45rem",
  },
}));

const Form = styled(Box)(({ theme }) => ({
  border: "thin solid #cdcdcd",
  padding: "calc(1rem - 1px)",
  marginBottom: "1.5rem",
  fontWeight: "300",
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.22176rem",
  lineHeight: "1.5rem",
  marginBottom: ".7rem",
  paddingTop: "0.301rem",
  fontWeight: "300",  
  [theme.breakpoints.up("md")]: {
    fontSize: "1.30612rem",
    lineHeight: "2rem",
    marginBottom:".95rem",
    paddingTop:"0.051rem",
  },
}));

const LoginFormLabel = styled("label")(({ theme }) => ({
  cursor: "pointer",
  display: "inline-block",
  marginBottom: ".6rem",
  marginTop: "0",
  paddingTop: ".4rem",
}));


const LoginFormRadio = styled("input")(({ theme }) => ({
  margin: "0",
  width: "1rem",
  height: "1rem",
}));

export const Main = () => {
  const [isLogin, setIsLogin] = useState(true);

    const changeOption=(e)=>{
        if(e.target.value ==='login'){
            return setIsLogin(true);
        }
        setIsLogin(false);
    }

  return (
    <Content>
      <PStrip
        sx={{
          padding: "1rem 0",
          backgroundImage:
            "linear-gradient(212deg, #E95420 0%, #C44631 6%, #A33940 12%, #8B304A 18%, #7C2B51 24%, #772953 29%, #55163B 51%, #370626 75%, #2C001E 100%)",
          "@media (min-width:1037px)": {
            padding: "2rem 0",
          },
        }}
      >
        <LayoutMaxWidth sx={{ maxWidth: "72em" }}>
          <GridRow xxs="span 4" xs="span 6" md="span 12">
            <Title>One account for everything on Ubuntu</Title>
          </GridRow>
        </LayoutMaxWidth>
      </PStrip>
      <PStrip>
        <LayoutMaxWidth sx={{ maxWidth: "72em" }}>
          <GridRow xxs="span 4" xs="span 6" md="span 6">
            <Form>
              <FormTitle>Ubuntu One › log in</FormTitle>
              <Line sx={{ marginBottom: "15px" }} />
              <Box>
                <Box>
                  <form action="">
                    <div>
                      <LoginFormLabel>Please type your email:</LoginFormLabel>
                      <FormInput placeholder="Your email address" />
                      <Box display="flex" alignItems="center">
                        <LoginFormRadio
                          type="radio"
                          id="new_user"
                          value="create"
                          name="user-intentions"
                          onChange={changeOption}
                        />
                        <LoginFormLabel
                          htmlFor="new_user"
                          sx={{ paddingLeft: "1rem" }}
                        >
                          I don’t have an Ubuntu One account
                        </LoginFormLabel>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <LoginFormRadio
                          type="radio"
                          id="return_user"
                          value="login"
                          name="user-intentions"
                          onChange={changeOption}
                          defaultChecked
                        />
                        <LoginFormLabel
                          htmlFor="return_user"
                          sx={{ paddingLeft: "1rem" }}
                        >
                          I have an Ubuntu One account{" "}
                          <i>and my password is:</i>
                        </LoginFormLabel>
                      </Box>
                    </div>
                    {isLogin ? <MainLogin/> : <MainRegister/>}
                  </form>
                </Box>
              </Box>
            </Form>
            <aside></aside>
          </GridRow>
        </LayoutMaxWidth>
      </PStrip>
    </Content>
  );
};
