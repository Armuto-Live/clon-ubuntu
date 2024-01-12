import React from 'react'



export const StripNoticeWrapper = () => {
  return (
    <StripNoticeContent noPaddingTop={noPaddingTop} noPaddingBottom={noPaddingBottom}>
        {children}
    </StripNoticeContent>
  )
}
