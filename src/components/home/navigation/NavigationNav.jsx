import { useState, useRef,useContext } from "react";
import { LinkItem } from "../../global";
import { NavigationItem, NavigationSearch } from "./index";


import {
  NavigationNavContainer,
  NavigationItems,
  NavigationItemHideSmall,
} from "../../../style";

import { IconButton, Box  } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "../../modal/Modal";
import { DataContext } from "../../../context/Context";

export const NavigationNav = ({
  options,
  handleOptionClick,
  changeStyle,
}) => {

  const {openModal,buttonSearch,setButtonSearch}=useContext(DataContext);

  const openModalButton=()=>{
    openModal();
    setButtonSearch(true);
  }
  
  return (
    <>
      <NavigationNavContainer sx={{ display: buttonSearch ? "none" : "flex" }}>
        <NavigationItems>
          {options.map((options, index) => (
            <NavigationItem
              onClick={() => handleOptionClick(index)}
              name={options.title}
              key={index}
              style={changeStyle(index)}
            />
          ))}
        </NavigationItems>

        <NavigationItemHideSmall>
          <IconButton
            size="small"
            sx={{ padding: "1rem 1rem 1rem 1.5rem", color: "white" }}
            onClick={openModalButton}
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
      <Modal></Modal>
      <NavigationSearch />
    </>
  );
};
