import React from 'react'

import { Layout } from '../style'

export const LayoutMaxWidth = ({children}) => {
  return (
    <Layout container alignItems="center" >
      {children}
    </Layout>
  )
}
