import React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const ListItem = styled("li")(({ theme }) => ({
    display:"block",
    marginTop:".5rem",
    marginRight:"1rem",
}));

const LinkItem=styled(Link)(({theme})=>({
    color:"#000",
    textDecoration:"none",
    textWrap:"nowrap",
    fontSize:"1rem",
    "&:hover":{
        textDecoration:"underline 1px",
    }
}))

export const FooterListItem = ({ text,sx }) => {
  return (
    <ListItem sx={sx}>
      <LinkItem >
        <small>{text}</small>
      </LinkItem>
    </ListItem>
  );
};
