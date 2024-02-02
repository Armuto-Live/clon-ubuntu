import { useState, useRef } from "react";
import { LinkItem } from "../../global";
import { NavigationItem, NavigationSearch } from "./index";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../modal/Modal";

import {
  NavigationNavContainer,
  NavigationItems,
  NavigationItemHideSmall,
} from "../../../style";

import { IconButton, styled, Box, Typography, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const NavigationNav = ({
  options,
  handleOptionClick,
  changeStyle,
  handleChange,
}) => {
  const [isOpenModal, openModal, closeModal, setIsOpen] = useModal(false);

  return (
    <>
      <NavigationNavContainer sx={{ display: isOpenModal ? "none" : "flex" }}>
        {/* <NavigationItems>
        <NavigationItem name={"Enterprise"} />
        <NavigationItem name={"Developer"} />
        <NavigationItem name={"Community"} />
        <NavigationItem name={"Download"} />
      </NavigationItems> */}
        <NavigationItems>
          {options.map((options, index) => (
            <NavigationItem
              onClick={(e) => handleOptionClick(e, index)}
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
            onClick={openModal}
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
      <Modal isOpen={isOpenModal} closeModal={closeModal}></Modal>
      <NavigationSearch isOpenModal={isOpenModal} closeModal={closeModal} />
    </>
  );
};
