import { styled } from "@mui/material"
import { LinkItem } from "../global";

const ListItem=styled('li')(({theme})=>({
  display:"inline",
  marginRight:"1rem",
}));

export const InlineListItem = ({text}) => {
  return (
    <ListItem>
      <LinkItem>
        {text}
      </LinkItem>
    </ListItem>
  )
}
