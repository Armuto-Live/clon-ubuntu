import { Link } from "react-router-dom";
import { styled, Box, Grid, Button, IconButton } from "@mui/material";

const ORANGE_COLOR = "#e95420";
const WHITE_COLOR = "#FFFFFF";
const BLACK_COLOR = "#333333";
const GRAY_COLOR = "#d9d9d9";
const MAX_WIDTH = "80rem";

export const Layout = styled(Box)((theme) => ({
  display:"grid",
  // gridAutoFlow:"column",
  padding: "0 1rem",
  maxWidth: "80rem",
  "@media (min-width: 620px)": {
    padding: "0 1.5rem",
    margin: "0 auto",
    fontSize: "1rem",
  },
  "@media (min-width: 1037px)": {
    marginLeft: "auto",
    marginRight: "auto",
  },
  "@media (min-width: 1681px)": {
    padding: "0 27px",
  },
}));

export const Header = styled(Box)((theme) => ({
  background: BLACK_COLOR,
  color: WHITE_COLOR,
}));

export const NavigationRow = styled(Box)((theme) => ({
  paddingLeft: "0",
  paddingRight: "0",
  maxWidth: MAX_WIDTH,
  width: "100%",
  "@media (min-width: 1037px)": {
    padding: "0 1.5rem",
    display: "flex",
    margin: "0 auto",
    fontSize: "1rem",
  },
  "@media (min-width: 1681px)": {
    padding: "0 27px",
  },
}));

export const NavigationBanner = styled(Box)((theme) => ({
  paddingLeft: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: ORANGE_COLOR,
  "@media (min-width: 1037px)": {
    paddingLeft: "1rem",
  },
}));

export const NavigationLogo = styled(Box)((theme) => ({
  height: "3.5rem",
  display: "flex",
  "@media (min-width: 1037px)": {
    marginRight: "1rem",
  },
}));

export const NavigationLogoLink=styled(Link)((theme)=>({
  display:"flex",
}))

export const NavigationImage = styled("svg")((theme) => ({
  alignSelf: "center",
  maxHeight: "1.5rem",
  maxWidth: "5rem",
}));

export const NavigationLogin = styled(Box)((theme) => ({
  "@media (min-width: 620px)": {
    display: "none",
  },
}));

export const NavigationLoginLink = styled(Link)((theme) => ({
  alignSelf: "center",
  marginRight: "calc(1rem - 6px)",
  textDecoration: "none",
  color: WHITE_COLOR,
  fontWeight: 100,
}));

export const NavigationNavContainer = styled(Box)((theme) => ({
  display: "flex",
  flexDirection: "column-reverse",
  "@media (min-width: 620px)": {
    flexDirection: "column",
  },
  "@media (min-width: 1037px)": {
    flexDirection: "row",
    flex: "1",
    justifyContent: "space-between",
  },
}));

export const NavigationItems = styled("ul")((theme) => ({
  listStyleType: "none",
  padding: "0",
  display: "flex",
  margin: "0",
  justifyContent: "space-between",
}));

export const NavigationItemContent = styled("li")((theme) => ({
  position: "relative",
  padding: "1rem 0.375rem",
  lineHeight: "1.5rem",
  textAlign: "center",
  flex: "1",
  "@media (min-width: 620px)": {
    padding: "1rem 1.5rem",
  },
  "@media (min-width: 1037px)": {
    paddingRight: "2rem",
    paddingLeft: "1rem",
    fontWeight: "100",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:after": {
      content: '" "',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill='%23d9d9d9' d='M8.187 11.748l6.187-6.187-1.06-1.061-5.127 5.127L3.061 4.5 2 5.561z'/%3E%3C/svg%3E")`,
      backgroundPosition: "top 52% right 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: ".75rem",
      height: "100%",
      width: "2em",
      pointerEvent: "none",
      position: "absolute",
      top: "0",
      right: "0",
    },
  },
  "@media (min-width: 1681px)": {
    padding: "18px 36px 18px 18px",
  },
}));

export const NavigationContainerSearch = styled(Box)((theme) => ({
  marginTop: "1rem",
  paddingTop: "1rem",

  "@media (min-width: 620px)": {
    display: "none",
  },
}));

export const NavigationForm = styled("form")((theme) => ({
  margin: "-1px 1rem 1.2rem 1rem",
  minWidth: "10em",
  display: "flex",
  justifyContent: "flex-end",
  position: "relative",
}));

export const NavigationFormInput = styled("input")((theme) => ({
  flex: "1 1 100%",
  paddingTop: "calc(0.4rem - 1px)",
  paddingBottom: "calc(0.4rem - 1px)",
  paddingRight: "4.6rem",
  paddingLeft: ".5rem",
  // position:"absolute",
  marginBottom: "0",
  minWidth: "8em",
  top: "0",
  right: "0",
  border: "0 solid transparent",
  width: "100%",
  fontWeight: "400",
  lineHeight: "1.5rem",
}));

export const NavigationFormButton = styled(IconButton)((theme) => ({}));
export const NavigationFormButtonClose = styled(IconButton)((theme) => ({
  position: "absolute",
  display: "none",
}));
export const NavigationFormButtonSearch = styled(IconButton)((theme) => ({
  position: "absolute",
}));

export const NavigationItemHideSmall = styled("ul")((theme) => ({
  display: "none",
  listStyleType: "none",
  margin: "0",
  padding: "0",
  // padding:"1rem 1rem 1rem 1.5rem",
  "@media (min-width: 620px)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export const NavigationLoginLinkHeader=styled(Link)((theme)=>({

}))
export const TakeOverSection = styled(Box)((theme) => ({
  height: "35rem",
  paddingTop: "4rem",
  paddingBottom: "8rem",
  backgroundColor: "#772953",
  backgroundImage:
    "linear-gradient(to bottom left, rgba(119, 41, 83, 0.16) 0, rgba(119, 41, 83, 0.16) 49.9%, transparent 50%),linear-gradient(to bottom right, rgba(228, 228, 228, 0.5) 0, rgba(228, 228, 228, 0.5) 49.9%, transparent 50%),linear-gradient(to top left, white 0%, white 49.3%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%),linear-gradient(-89deg, #e95420 0%, #772953 42%, #2c001e 94%)",
  backgroundBlendMode: "multiply,multiply,normal,normal",
  backgroundPosition: "top right,top left,right bottom -1px,left top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "135% 97.83%,148% 83%,119% 13%,100% 99.83%",
  color: WHITE_COLOR,
  display: "flex",
  alignItems: "center",
  "@media (min-width: 876px)": {
    padding: "2rem 0",
    backgroundSize: "74% 99.83%,68% 91%,103.8% 20.26%,100% 99.8%",
  },
  "@media (min-width: 1037px)": {
    padding: "4rem 0",
    backgroundSize: "74% 99.83%,68% 91%,103.8% 20.26%,100% 99.8%",
  },
}));

export const TakeOverSectionAnimation = styled(Grid)((theme) => ({
  padding: "0 1rem",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "80rem",
  display: "flex",
}));

export const TakeOverTitle = styled("h1")((theme) => ({
  fontWeight: "550",
  paddingTop: "0",
  marginTop: "0",
  marginBottom: ".95rem",
  fontSize: "2rem",
  lineHeight: "2.5rem",
  maxWidth: "40em",
  "@media (min-width: 1037px)": {
    fontSize: "2.5rem",
    lineHeight: "3rem",
  },
}));
export const TakeOverSubTitle = styled("p")((theme) => ({
  fontSize: "1.59rem",
  fontWeight: "275",
  lineHeight: "2rem",
  marginBottom: "1.05rem",
  marginTop: "0",
  maxWidth: "40em",
  paddingTop: ".45rem",
  "@media (min-width: 1037px)": {
    fontSize: "1.6rem",
  },
}));

export const TakeOverCtasParraf = styled("p")((theme) => ({
  lineHeight: "1.5rem",
  marginTop: "0",
  paddingTop: ".4rem",
  maxWidth: "40em",
  marginBottom: "1.1rem",
}));

export const TakeOverLinkButton = styled(Link)((theme) => ({
  marginBottom: ".6rem",
  // marginTop: "-0.4rem",
  background: "#0e8420",
  border: "1.5px solid #0e8420",
  color: WHITE_COLOR,
  cursor: "pointer",
  display: "inline-block",
  // margin:"0 1rem 1.2rem 0",
  margin: "0 0 .6rem 0",
  padding: "calc(.4rem - 1px) 1rem",
  textAlign: "center",
  textDecoration: "none",
}));

export const TakeOverLinkText = styled(Link)((theme) => ({
  color: WHITE_COLOR,
}));

export const TakeOverImg = styled("img")((theme) => ({
  border: "0",
  height: "auto",
  maxWidth: "100%",
}));

export const StripNoticeWrapperNoBottom = styled(Box)((theme) => ({
  paddingTop: "2rem",
  "@media (min-width: 1037px)": {
    paddingTop: "4rem",
  },
}));

export const StripNoticeNotification = styled(Box)((theme) => ({
  position: "relative",
  bottom: "0",
  top: "0",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 1a7 7 0 110 14A7 7 0 018 1zm0 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM8.75 7v5.02h-1.5V7h1.5zM8.5 3.944a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h1z' fill='%23666' fill-rule='nonzero'/%3E%3C/svg%3E")`,
  marginBottom: "0",
  backgroundPosition: "1rem 1.15rem",
  backgroundRepeat: "no-repeat",
  backgroundSize: "1rem",
  paddingBottom: "calc(.5rem - 1px)",
  paddingLeft: "3rem",
  paddingTop: "calc(.5rem - 1px)",
  border: `thin solid ${GRAY_COLOR}`,
  width:"100%",
  "&:before": {
    content: '""',
    position: "absolute",
    height: "auto",
    width: ".1875rem",
    bottom: "-1px",
    top: "-1px",
    left: "0",
    zIndex: "1",
    backgroundColor: "#24598f",
  },
}));

export const StripNoticeNotificationContent = styled(Box)((theme) => ({
  marginBottom:".6rem",
  paddingTop:".4rem",
  maxWidth:"unset",
  paddingRight:"2rem",
}));

export const StripNoticeLogoSection=styled(Box)((theme)=>({

}));

export const StripNoticeLogoSectionItems=styled(Box)((theme)=>({
  lineHeight:"0",
  paddingBottom:".5rem",
  paddingTop:".5rem",
  "@media (min-width: 620px)": {
    paddingBottom:".75rem",
    paddingTop:".75rem",
  },
  "@media (min-width: 1037px)": {
    paddingBottom:"1rem",
    paddingTop:"1rem",
  },
}));

export const StripNoticeLogoSectionItem=styled(Box)((theme)=>({
  display:"inline-block",
  margin:"0",
  marginBottom:"-0.5rem",
  marginRight:"3rem",
  marginTop:"-0.5rem",
  "@media (min-width: 620px)": {
    marginBottom:"-0.75rem",
    marginTop:"-0.75rem",
  },
  
  "@media (min-width: 1037px)": {
    marginBottom:"-1rem",
    marginTop:"-1rem",
  },
}))

export const StripNoticeLogoSectionItemImg=styled('img')((theme)=>({
  display:"block",
  height:"4rem",
  maxWidth:"none",
  width:"auto",
  border:"0",
  "@media (min-width: 620px)": {
    height:"6rem",
  },
  
  "@media (min-width: 1037px)": {
    height:"8rem",
  },
}))