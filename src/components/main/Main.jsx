import React from 'react'
import { Takeover } from './Takeover'
import { StripNotice } from './StripNotice'
import { ModerEnterprise } from './ModerEnterprise'
import { LatestNews } from './LatestNews'

export const Main = () => {
  return (
    <>
      <Takeover/>
      <StripNotice/>
      <ModerEnterprise/>
      <LatestNews/>
    </>
  )
}
