import { Typography, Box } from "@mui/material";
import React from "react";

import {
  Label,
  FormInputText,
  FormButton,
  FormHelpText,
  FormInputRadioCheck,
} from "./index";

export const MainRegister = () => {
  return (
    <>
      <Label>
        Please tell us your full name and choose a username and password:
      </Label>
      <Box>
        <Label>Full name</Label>
        <FormInputText placeholder="Your full name" />
      </Box>
      <Box>
        <Label>Username</Label>
        <FormInputText placeholder="Username" />
        <FormHelpText />
      </Box>
      <Box>
        <Label>Choose password</Label>
        <FormInputText type="password" placeholder="Password with at least 8 and at most 512 characters (ASCII only)" />
      </Box>
      <Box>
        <Label>Re-type password</Label>
        <FormInputText type="password" placeholder="Retype password" />
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <FormInputRadioCheck type="checkbox" id="id_accept" />
          <Label htmlFor="id_accept" sx={{ paddingLeft: "1rem" }}>
            I have read and accept the Ubuntu One terms of service, data privacy
            policy and Canonical's SSO privacy notice.
          </Label>
        </Box>
        <FormButton text="Create account" />
      </Box>
    </>
  );
};
