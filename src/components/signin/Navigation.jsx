import { styled, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LinkItem } from "../global/LinkItem";

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "#363636",
  color: "#fff",
}));

const Navbar = styled(Box)(({ theme }) => ({
  maxWidth: "72em",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  textWrap: "nowrap",
  fontWeight: "300",
  [theme.breakpoints.up("xs")]: {
    paddingTop: "0",
    justifyContent: "space-between",
  },
}));

const LoginLink=styled(Link)(({theme})=>({
    color:"white",
    padding:".75rem 1rem",
    textDecoration:"none",
    "&:hover":{
        opacity:".4"
    }
}))
export const Navigation = () => {
  return (
    <Header>
      <Navbar>
        <LinkItem sx={{ margin: "0 1rem 0 1.5rem" }}>
          <img
            src="https://assets.ubuntu.com/v1/d738f754-Ubuntu_One_Mono_Logo.svg"
            alt="Ubuntu One"
            width="90" height="48"
          />
        </LinkItem>
        <LoginLink>
          Log in or Create account
        </LoginLink>
      </Navbar>
    </Header>
  );
};
