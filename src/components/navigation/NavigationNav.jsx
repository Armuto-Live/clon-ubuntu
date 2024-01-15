import { NavigationItem } from "./NavigationItem";
import { NavigationSearch } from "./NavigationSearch";


import {
  NavigationNavContainer,
  NavigationItems,
  NavigationItemHideSmall,
  NavigationFormButtonSearch,
  NavigationLoginLinkHeader,
} from "../../style";

import {IconButton,Box, Typography} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
export const NavigationNav = () => {
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
        <IconButton size="small" style={{padding:"1rem 1rem 1rem 1.5rem",color:"white"}}>
          <Typography variant="body1" color="white" style={{marginRight:".3rem"}}>
            Search
          </Typography>
          <SearchIcon sx={{fontSize:"18px"}}/>
        </IconButton>
        <Box style={{padding:"1rem 1rem 1rem 1.5rem"}}>
          <NavigationLoginLinkHeader to={"/signIn"}>
            Sign in
          </NavigationLoginLinkHeader>
        </Box>
        
        <NavigationItem name={"Community"} />
      </NavigationItemHideSmall>
    </NavigationNavContainer>
  );
};
