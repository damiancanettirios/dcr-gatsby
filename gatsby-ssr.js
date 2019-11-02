import React from 'react'
import TopLayout from './src/components/top-layout'

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
