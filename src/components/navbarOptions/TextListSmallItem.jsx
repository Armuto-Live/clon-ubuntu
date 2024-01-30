import { styled } from '@mui/material'
import React from 'react'
import { LinkItem } from '../global';

const ListItem=styled('li')(({theme})=>({
  position:"relative",
  paddingBottom:".25rem",
  marginBottom:".25rem",
  "&::after":{
    content:"''",
    backgroundColor:"rgba(217,217,217,.5)",
    position:"absolute",
    bottom:"0",
    height:"1px",
    left:"0",
    right:"0",
  },
  "&:last-of-type::after":{
    content:"''",
    height:"0",
  }
}));

export const TextListSmallItem = ({text,sx}) => {
  return (
    <ListItem sx={sx}>
      <LinkItem>
        {text}
      </LinkItem>
    </ListItem>
  )
}
