import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import Typography from '@material-ui/core/Typography'

const components = {
  blockquote: props => (
    <div
      style={{
        background: `#7f8c8d33`,
        padding: `0.1rem 2.5rem 2rem 2.5rem`,
        marginTop: `2rem`,
      }}
    >
      <span style={{ fontStyle: `italic` }} {...props} />
    </div>
  ),
  h1: props => (
    <Typography variant="h2" style={{ marginTop: `2.5rem` }} {...props} />
  ),
  h2: props => (
    <Typography variant="h3" style={{ marginTop: `2.5rem` }} {...props} />
  ),
  h3: props => (
    <Typography variant="h4" style={{ marginTop: `2.5rem` }} {...props} />
  ),
  p: props => (
    <Typography
      variant="body1"
      style={{ marginTop: `2rem`, fontSize: `100%` }}
      {...props}
    />
  ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
