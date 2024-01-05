import React from "react";
import {
  NavigationContainerSearch,
  NavigationForm,
  NavigationFormInput,
  NavigationFormButtonClose,
  NavigationFormButtonSearch,
} from "../../style";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const NavigationSearch = () => {
  return (
    <NavigationContainerSearch>
      <NavigationForm>
        <NavigationFormInput placeholder="Search our sites" />
        <NavigationFormButtonClose>
          <CloseIcon fontSize="small" />
        </NavigationFormButtonClose>
        <NavigationFormButtonSearch>
          <SearchIcon fontSize="small" />
        </NavigationFormButtonSearch>
      </NavigationForm>
    </NavigationContainerSearch>
  );
};
