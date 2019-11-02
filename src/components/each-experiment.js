import React from 'react'
import Img from 'gatsby-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    marginRight: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: `#1D1E2C`,
    border: `1px solid #C6C7C4`,
    borderTop: `3px solid #20BF55`,
    height: 480,
  },
  [theme.breakpoints.down('sm')]: {
    card: {},
    cardGrid: {
      marginRight: 0,
      marginBottom: 10,
    },
  },
}))

const EachExperiment = ({ node }) => {
  const classes = useStyles()
  return (
    <Grid item md={4} sm={6} xs={12} className={classes.cardGrid}>
      <Card className={classes.card}>
        <div style={{ height: 180 }}>
          <Img fluid={node.heroImage.fluid} alt={node.heroImage.title} />
        </div>
        <CardContent>
          <Typography
            variant="h5"
            color="secondary"
            style={{ fontWeight: `bold` }}
          >
            {node.title}
          </Typography>
          <Typography
            variant="h6"
            color="secondary"
            style={{ marginTop: 10, fontWeight: `normal` }}
          >
            {node.shortDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{ marginTop: 10 }}>
            {node.tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                style={{ marginTop: 5, marginRight: 5 }}
              />
            ))}
          </div>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default EachExperiment
