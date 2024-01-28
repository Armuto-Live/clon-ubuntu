import { useState } from "react";
import { LinkItem } from "../../global";
import { NavigationItem, NavigationSearch } from "./index";
import {
  ViewEnterprise,
  ViewDeveloper,
  ViewComunnity,
  ViewDownload,
} from "../../navbarOptions/index";

import {
  NavigationNavContainer,
  NavigationItems,
  NavigationItemHideSmall,
  NavigationFormButtonSearch,
  NavigationLoginLinkHeader,
} from "../../../style";

import { IconButton, Box, Typography,Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const NavigationNav = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      title: "Enterprise",
      content: <ViewEnterprise />,
    },
    {
      id: 2,
      title: "Developer",
      content: <ViewDeveloper />,
    },
    {
      id: 3,
      title: "Comunnity",
      content: <ViewComunnity />,
    },
    {
      id: 4,
      title: "Download",
      content: <ViewDownload />,
    },
  ];

  const handleOptionClick = (option) => {
    if (option === selectedOption) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <NavigationNavContainer>
      {/* <NavigationItems>
        <NavigationItem name={"Enterprise"} />
        <NavigationItem name={"Developer"} />
        <NavigationItem name={"Community"} />
        <NavigationItem name={"Download"} />
      </NavigationItems> */}
      <NavigationItems>

      {options.map((options, index) => (
        <Box key={index}>
          <NavigationItem onClick={() => handleOptionClick(index)} name={options.title} />
          {selectedOption === index && (
            <Box position="absolute" left="0" top="56px" zIndex={999} >
              {options.content}
            </Box>
          )}
        </Box>
      ))}
      </NavigationItems>
      <NavigationSearch />
      <NavigationItemHideSmall>
        <IconButton
          size="small"
          sx={{ padding: "1rem 1rem 1rem 1.5rem", color: "white" }}
        >
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
