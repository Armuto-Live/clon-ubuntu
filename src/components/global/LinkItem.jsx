import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const LinkComponent = styled(Link)(({theme}) => ({
    display: "inline-flex",
    textDecoration: "none",
    color: "#0066CC",
    fontSize:"inherit",
    "&:hover":{
    textDecoration: "underline 1px",
    textUnderlineOffset:".075em",
    },
}))

export const LinkItem = ({children,to,sx}) => {
    return (
        <LinkComponent to={to} sx={sx}>{children}</LinkComponent>
    )
}
