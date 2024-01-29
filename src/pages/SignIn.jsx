import {styled } from '@mui/material';
import {Footer, Main, Navigation} from '../components/signin/index'

const Line=styled("hr")(({theme})=>({
  backgroundColor:"#cdcdcd",
  border:"0",
  height:"1px",
  marginBottom:"15px",
  marginTop:"0",
  width:"100%",
}))

export const SignIn = () => {
  return (
    <>
      <Navigation/>
      <Main/>
      <Line/>
      <Footer/>
    </>
  );
};
