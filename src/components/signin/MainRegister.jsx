import { Typography,Box } from "@mui/material";
import React from "react";

import { Label,FormInput,FormButton } from "./index";

export const MainRegister = () => {
  return (
    <>
      <Label>
      Please tell us your full name and choose a username and password:
      </Label>
      <Box>
        <Label>
          Full name
        </Label>
        <FormInput placeholder="Your full name"/>
      </Box>
      <Box>
        <Label>
          Username
        </Label>
        <FormInput placeholder="Username"/>
        <ul>
          <li>Between 3 and 32 characters long.</li>
          <li>Allowed: lowercase letters, numbers and hyphens.</li>
          <li>
            <strong>NOT</strong>
            allowed: CAPITAL letters, special characters.
          </li>
          <li>

            <strong>NOT</strong>
            allowed: only numbers or consecutive hyphens.
          </li>
        </ul>
      </Box>
      <Box>
      <Label>
          Choose password
        </Label>
        <FormInput placeholder="Password with at least 8 and at most 512 characters (ASCII only)"/>
      </Box>
      <Box>
      <Label>
          Re-type password
        </Label>
        <FormInput placeholder="Retype password"/>
      </Box>
      <Box>
        <FormInput type="checkbox"/>
        <FormButton text="Create account"/>
      </Box>
    </>
  );
};
