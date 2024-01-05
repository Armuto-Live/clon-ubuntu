import { styled, Box,Grid, Button, IconButton, Link } from "@mui/material";

const ORANGE_COLOR = "#e95420";
const WHITE_COLOR = "#FFFFFF";
const BLACK_COLOR = "#333333";
const MAX_WIDTH = "80rem";

export const Header = styled(Box)((theme) => ({
  background: BLACK_COLOR,
  color: WHITE_COLOR,
}));

export const NavigationRow = styled(Box)((theme) => ({
  paddingLeft: "0",
  paddingRight: "0",
  maxWidth: MAX_WIDTH,
  width: "100%",
  fontSize: ".875rem",
  "@media (min-width: 1037px)": {
    padding: "0 1.5rem",
    display: "flex",
    margin: "0 auto",
    fontSize: "1rem",
  },
  "@media (min-width: 1681px)": {
    padding: "0 27px",
    fontSize: "1.125rem",
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
    fontSize: "1.2rem",
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

export const TakeOverSection=styled(Box)((theme)=>({
    height:"35rem",
    paddingTop:"4rem",
    paddingBottom:"8rem",
    backgroundColor:"#772953",
    backgroundImage:"linear-gradient(to bottom left, rgba(119, 41, 83, 0.16) 0, rgba(119, 41, 83, 0.16) 49.9%, transparent 50%),linear-gradient(to bottom right, rgba(228, 228, 228, 0.5) 0, rgba(228, 228, 228, 0.5) 49.9%, transparent 50%),linear-gradient(to top left, white 0%, white 49.3%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%),linear-gradient(-89deg, #e95420 0%, #772953 42%, #2c001e 94%)",
    backgroundBlendMode:"multiply,multiply,normal,normal",
    backgroundPosition:"top right,top left,right bottom -1px,left top",
    backgroundRepeat:"no-repeat",
    backgroundSize:"74% 99.83%,68% 91%,103.8% 20.26%,100% 99.8%",
    color:WHITE_COLOR,
    display:"flex",
    alignItems:"center",
}))

export const TakeOverSectionAnimation=styled(Grid)((theme)=>({
    padding:"0 1rem",
    marginLeft:"auto",
    marginRight:"auto",
    maxWidth:"80rem",
}));