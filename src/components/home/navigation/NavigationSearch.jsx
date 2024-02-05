import { useState, useRef, useEffect,useContext } from "react";
import {
  NavigationContainerSearch,
  NavigationForm,
  NavigationFormInput,
  NavigationFormButton,
} from "../../../style";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery, useTheme } from "@mui/material";
import { DataContext } from "../../../context/Context";

export const NavigationSearch = () => {
  const {closeModal,buttonSearch}=useContext(DataContext);

  const [inputValue, setInputValue] = useState("");
  const refCloseIcon = useRef(null);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const searchValue = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!matches) {
      refCloseIcon.current.style.display = value.length ? "flex" : "none";
    }
  };

  const clearInput = () => {
    setInputValue("");
    if (!matches) {
      refCloseIcon.current.style.display = "none";
    } else {
      closeModal();
      refCloseIcon.current.style.display = "flex";
    }
  };

  useEffect(() => {
    if (!matches) {
      refCloseIcon.current.style.display = !inputValue ? "none" : "flex";
    } else {
      refCloseIcon.current.style.display = "flex";
    }
  }, [matches, inputValue]);

  return (
    <NavigationContainerSearch
      sx={{ display: { xxs: "block", md: buttonSearch ? "block" : "none" } }}
    >
      <NavigationForm>
        <NavigationFormInput
          placeholder="Search our sites"
          value={inputValue}
          onChange={(e) => searchValue(e)}
        />
        <NavigationFormButton
          ref={refCloseIcon}
          sx={{ display: { xxs: "none", md: "block" } }}
          onClick={clearInput}
        >
          <CloseIcon fontSize="small" />
        </NavigationFormButton>
        <NavigationFormButton sx={{ display: { xxs: "flex", md: "none" } }}>
          <SearchIcon fontSize="small" />
        </NavigationFormButton>
      </NavigationForm>
    </NavigationContainerSearch>
  );
};
