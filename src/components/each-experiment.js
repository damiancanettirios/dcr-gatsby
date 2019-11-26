import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    backgroundColor: `#1D1E2C`,
    border: `1px solid #C6C7C4`,
    borderTop: `3px solid #20BF55`,
    marginRight: 10,
    height: `100%`,
  },
  cardGrid: {
    marginRight: 0,
    marginBottom: 10,
  },
  description: {
    color: `#C6C7C4`,
    marginTop: 10,
    fontWeight: `normal`,
  },
  link: {
    textDecoration: `none`,
    color: `#C6C7C4`,
    '&:hover': {
      textDecoration: `underline`,
      color: `#20BF55`,
    },
    fontWeight: `bold`,
  },
  image: {
    borderBottom: `1px solid #C6C7C4`,
  },
})

const EachExperiment = ({ node }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <Img
        fluid={node.heroImage.fluid}
        alt={node.heroImage.title}
        className={classes.image}
      />
      <CardContent>
        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ height: `100%` }}
        >
          <Grid item>
            <Link to={`/experiments/${node.slug}`} className={classes.link}>
              <Typography
                variant="h5"
                color="inherit"
                style={{ fontWeight: `bold` }}
              >
                {node.title}
              </Typography>
            </Link>
          </Grid>
          <Grid item className={classes.description}>
            <Typography variant="body1" color="inherit">
              {node.shortDescription}
            </Typography>
          </Grid>
          <Grid item>
            <div style={{ marginTop: 10 }}>
              {node.tags.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  style={{ marginTop: 5, marginRight: 5 }}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default EachExperiment
