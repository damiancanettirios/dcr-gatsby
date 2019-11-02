import React from 'react'
import Typography from '@material-ui/core/Typography'

const Hero = ({ pageContent }) => (
  <React.Fragment>
    <div
      style={{
        color: `#C6C7C4`,
        margin: `0 auto`,
        maxWidth: `80%`,
        padding: `60px 0px 60px 0px`,
      }}
    >
      <Typography variant="h3" color="inherit" align="center">
        {pageContent.title}
      </Typography>
      <Typography
        variant="h6"
        color="inherit"
        align="center"
        style={{ marginTop: 20, marginBottom: 50 }}
      >
        {pageContent.description.description}
      </Typography>
    </div>
  </React.Fragment>
)

export default Hero
