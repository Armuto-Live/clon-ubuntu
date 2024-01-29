import React from 'react'
import { Grid,Box } from '@mui/material'
export const GridRow = ({children,xxs,xs,sm,md,sx}) => {
  return (
    <Box gridColumn={{ xxs:xxs,xs:xs, sm: sm, md: md }} sx={sx}>{children}</Box>
  )
}
