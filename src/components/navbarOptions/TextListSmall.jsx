import { styled } from '@mui/material'
import { TextListSmallItem } from './index'

const ListItems=styled('ul')(({theme})=>({
  display:"block",
  margin:"0",
  marginBottom:"1.45rem",
  fontSize:".875rem",
  lineHeight:"1.25rem",
  paddingTop:".55rem",
}))
export const TextListSmall = ({children}) => {
  return (
    <>
    <ListItems>
      {children}
    </ListItems>
    </>
  )
}
