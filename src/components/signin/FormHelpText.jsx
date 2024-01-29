import { styled } from "@mui/material";
import { FormHelpTextItem } from "./index";

const HelpList = styled("ul")(({ theme }) => ({
  color: "#666",
  marginTop: "-0.5rem",
  fontSize: ".875rem",
  lineHeight: "1rem",
  marginBottom: ".8rem",
  paddingTop: ".2005rem",
  paddingLeft: "1rem",
  marginLeft: "1rem",
  listStyleType:"disc",
}));

export const FormHelpText = () => {
  return (
    <HelpList>
      <FormHelpTextItem>Between 3 and 32 characters long.</FormHelpTextItem>
      <FormHelpTextItem>
        Allowed: lowercase letters, numbers and hyphens.
      </FormHelpTextItem>
      <FormHelpTextItem>
        <strong>NOT</strong> allowed: CAPITAL letters, special characters.
      </FormHelpTextItem>
      <FormHelpTextItem>
        <strong>NOT</strong> allowed: only numbers or consecutive hyphens.
      </FormHelpTextItem>
    </HelpList>
  );
};
