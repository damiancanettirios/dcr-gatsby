import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default ({ cv }) => (
  <div
    style={{
      backgroundColor: `#C6C7C4`,
      padding: 15,
    }}
  >
    <Typography
      variant="body1"
      color="inherit"
      align="center"
      style={{
        padding: 0,
        margin: `0px 0px 10px 0px`,
      }}
    >
      With Experience Gained From
    </Typography>
    <Grid container direction="row" justify="center" alignItems="center">
      {cv.map(({ node }) => (
        <Grid key={node.id} item md={2} sm={4} xs={6}>
          <div style={{ marginTop: `10px`, marginBottom: `10px` }}>
            <img
              src={node.placeLogo.file.url}
              alt={node.name}
              style={{
                width: 100,
                filter: `grayscale(100%)`,
                display: `block`,
                marginLeft: `auto`,
                marginRight: `auto`,
              }}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  </div>
)
