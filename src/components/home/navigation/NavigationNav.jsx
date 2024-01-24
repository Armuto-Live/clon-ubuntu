import { LinkItem } from "../../global";
import { NavigationItem } from "./NavigationItem";
import { NavigationSearch } from "./NavigationSearch";

import {
  NavigationNavContainer,
  NavigationItems,
  NavigationItemHideSmall,
  NavigationFormButtonSearch,
  NavigationLoginLinkHeader,
} from "../../../style";

import { IconButton, Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const NavigationNav = () => {
  
  const showSearchInput=()=>{
    console.log("asd");
  }
  
  return (
    <NavigationNavContainer>
      <NavigationItems>
        <NavigationItem name={"Enterprise"} />
        <NavigationItem name={"Developer"} />
        <NavigationItem name={"Community"} />
        <NavigationItem name={"Download"} />
      </NavigationItems>
      <NavigationSearch />
      <NavigationItemHideSmall>
        <IconButton
          size="small"
          sx={{ padding: "1rem 1rem 1rem 1.5rem", color: "white" }}
          onClick={showSearchInput}
        >
          {/* <Typography variant="body1" color="white" sx={{ marginRight: ".3rem",display: { xxs: "none", md: "flex" } }}>
            Search
          </Typography> */}
          <SearchIcon sx={{ fontSize: "18px" }} />
        </IconButton>
        <Box>
          <LinkItem
            to={"/signIn"}
            sx={{
              padding: "1rem",
              color: "white",
              "&:hover": {
                textDecoration: "underline 1px",
                textUnderlineOffset: ".075em",
                backgroundColor: "#2b2b2b",
              },
            }}
          >
            Sign In
          </LinkItem>
        </Box>
      </NavigationItemHideSmall>
    </NavigationNavContainer>
  );
};
