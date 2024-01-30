import { styled } from "@mui/material";
import {
  LinkItem,
} from "../../global/index";

const ListItemContent= styled('li')(({theme})=>({
    display:"inline",
}))

export const ListItem = ({text}) => {
  return (
    <ListItemContent>
        <LinkItem>
            {text}
        </LinkItem>
    </ListItemContent>
  )
}
