import { useState, useRef } from "react";
import { LinkItem } from "../../global";
import { NavigationItem, NavigationSearch } from "./index";
/* import {useModal} from '../../../hooks/useModal'; */
/* import { Modal } from "../../modal/Modal"; */

import {
  NavigationNavContainer,
  NavigationItems,
  NavigationItemHideSmall,
  NavigationFormButtonSearch,
  NavigationLoginLinkHeader,
} from "../../../style";

import {
  IconButton,
  styled,
  Box,
  Typography,
  Grid,
  Modal,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const NavigationNav = ({
  options,
  handleOptionClick,
  changeStyle,
  handleChange,
}) => {
  /* const [isOpenModal, openModal, closeModal, setIsOpen] = useModal(false); */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <NavigationItem
            onClick={(e) => handleOptionClick(e, index)}
            name={options.title}
            key={index}
            style={changeStyle(index)}
          />
        ))}
      </NavigationItems>
      <Modal open={open} onClose={handleClose}>
        <>
          <NavigationSearch />
        </>
      </Modal>
      <NavigationItemHideSmall>
        <IconButton
          size="small"
          sx={{ padding: "1rem 1rem 1rem 1.5rem", color: "white" }}
          onClick={handleOpen}
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
