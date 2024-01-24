import { useState, useRef, useEffect } from "react";
import {
  NavigationContainerSearch,
  NavigationForm,
  NavigationFormInput,
  NavigationFormButton,
  NavigationFormButtonClose,
  NavigationFormButtonSearch,
} from "../../../style";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export const NavigationSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const refCloseIcon = useRef("");

  const searchValue = (e) => {
    if (e.target.value.length) {
      setInputValue(e.target.value);
      refCloseIcon.current.style.display = "flex";
    } else {
      setInputValue('');
      refCloseIcon.current.style.display = "none";
    }
  };

  const clearInput = (e) => {
    setInputValue("");
    refCloseIcon.current.style.display = "none";
  };

  return (
    <NavigationContainerSearch>
      <NavigationForm>
        <NavigationFormInput
          placeholder="Search our sites"
          value={inputValue}
          onChange={(e) => searchValue(e)}
        />
        <NavigationFormButton
          ref={refCloseIcon}
          sx={{
            marginRight: ".1875rem",
            display:"none",
          }}

          onClick={clearInput}
        >
          <CloseIcon fontSize="small" />
        </NavigationFormButton>
        <NavigationFormButton >
          <SearchIcon fontSize="small"/>
        </NavigationFormButton>
      </NavigationForm>
    </NavigationContainerSearch>
  );
};
