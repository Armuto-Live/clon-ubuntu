import { styled,Typography } from "@mui/material"

const PSmall=styled(Typography)(({theme})=>({
  fontSize:".875rem",
  paddingTop:".55rem",
  marginBottom:"1.1rem",
  fontWeight:"350",
}))

export const ParagraphSmall = ({text}) => {
  return (
    <PSmall>
      {text}
    </PSmall>
  )
}
